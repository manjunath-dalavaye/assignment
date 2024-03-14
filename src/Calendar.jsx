import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './Calendar.css';

function OrdersCalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='container'>
      <h2>Calendar</h2>

      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Orders Calendar Modal"
        className="modal"
      >
        <h3>Orders on {selectedDate.toDateString()}</h3>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
}

export default OrdersCalendarView;
