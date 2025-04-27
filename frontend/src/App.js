import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FaHome, FaUserGraduate, FaPlus, FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>CBIT</h1>
          <div className="admin-info">
            <p>Class Representative (CR)</p>
            <h3>Prateek Geedi</h3>
          </div>
        </div>
        
        <div className="sidebar-menu">
          <h2>Navigation</h2>
          <nav>
            <Link to="/"><FaHome /> Home</Link>
            <Link to="/students"><FaUserGraduate /> Student List</Link>
            <Link to="/add"><FaPlus /> Add Student</Link>
          </nav>
        </div>
      </div>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;