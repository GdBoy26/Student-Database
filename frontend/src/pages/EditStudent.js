import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    department: "",
    year: "",
    email: ""
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`https://student-database-backend-d6z6.onrender.com/${id}`);
        setFormData(res.data);
      } catch (error) {
        toast.error("Error loading student data");
        navigate("/students");
      }
    };
    fetchStudent();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://student-database-backend-d6z6.onrender.com/${id}`, formData);
      toast.success("Student Updated Successfully");
      navigate("/students");
    } catch (error) {
      toast.error("Error updating student");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Roll Number</label>
          <input 
            name="rollNumber" 
            value={formData.rollNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Department</label>
          <input 
            name="department" 
            value={formData.department} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Year</label>
          <input 
            name="year" 
            type="number" 
            value={formData.year} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
