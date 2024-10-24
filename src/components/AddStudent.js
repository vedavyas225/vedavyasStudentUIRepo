import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../styling/StudentForm.css'; 

function AddStudent() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const addStudent = () => {
    const newStudent = { name, rollNumber, subject };

    axios.post("http://localhost:9090/student", newStudent)
      .then(() => navigate("/"))
      .catch(error => console.error("Error adding student:", error));
  };

  return (
    <div className="form-container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Add New Student</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Roll Number</label>
            <input type="number" className="form-control" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <button onClick={addStudent} className="btn btn-success mt-3 w-100">Add Student</button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
