import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {
    const res = await axios.get("https://student-database-backend-ejr0.onrender.com");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await axios.delete(`https://student-database-backend-ejr0.onrender.com/${id}`);
      toast.success("Student Deleted");
      fetchStudents();
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Student List</h2>
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Year</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((stu) => (
            <tr key={stu._id}>
              <td>{stu.name}</td>
              <td>{stu.rollNumber}</td>
              <td>{stu.department}</td>
              <td>{stu.year}</td>
              <td>{stu.email}</td>
              <td>
                <Link to={`/edit/${stu._id}`} className="btn btn-primary">Edit</Link>
                <button 
                  onClick={() => deleteStudent(stu._id)} 
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
