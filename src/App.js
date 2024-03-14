import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import OrdersCalendarView from "./Calendar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Dashboard</NavLink></li>
            <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
            <li><NavLink to="/orders" activeClassName="active">Orders</NavLink></li>
            <li><NavLink to="/calendar" activeClassName="active">Calendar</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/calendar" element={<OrdersCalendarView/>} />
        </Routes>

        <footer style={footerStyle}>
          <p>&copy; {new Date().getFullYear()} Manjunath S.   All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
};

export default App;
