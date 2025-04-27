import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    department: "",
    year: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://student-database-backend-ejr0.onrender.com", formData);
      toast.success("Student Added Successfully");
      navigate("/students");
    } catch (error) {
      toast.error("Error adding student");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            name="name" 
            placeholder="Enter student name" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Roll Number</label>
          <input 
            name="rollNumber" 
            placeholder="Enter roll number" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Department</label>
          <input 
            name="department" 
            placeholder="Enter department" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Year</label>
          <input 
            name="year" 
            placeholder="Enter year" 
            type="number" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            name="email" 
            placeholder="Enter email" 
            type="email" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
