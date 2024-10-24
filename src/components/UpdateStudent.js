import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', rollNumber: '', subject: '' });

  useEffect(() => {
    axios.get(`http://localhost:9090/student/${id}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error("Error fetching student:", error);
      });
  }, [id]);

  const updateStudent = () => {
    axios.put(`http://localhost:9090/student/${id}`, student)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error("Error updating student:", error);
      });
  };

  return (
    <div className="update-student-form mt-5">
      <h2 className="text-center mb-4">Update Student</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Roll Number:</label>
        <input
          type="number"
          className="form-control"
          value={student.rollNumber}
          onChange={(e) => setStudent({ ...student, rollNumber: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Subject:</label>
        <input
          type="text"
          className="form-control"
          value={student.subject}
          onChange={(e) => setStudent({ ...student, subject: e.target.value })}
        />
      </div>
      <button onClick={updateStudent} className="btn btn-primary mt-3">Update Student</button>
    </div>
  );
}

export default UpdateStudent;
