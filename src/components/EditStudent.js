import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9090/student/${id}`)
      .then(response => {
        const student = response.data;
        setName(student.name);
        setRollNumber(student.rollNumber);
        setSubject(student.subject);
      })
      .catch(error => {
        console.error("Error fetching the student data: ", error);
      });
  }, [id]);

  const updateStudent = () => {
    const updatedStudent = { name, rollNumber, subject };
    
    axios.put(`http://localhost:9090/student/${id}`, updatedStudent)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error("Error updating the student: ", error);
      });
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter roll number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button className="save-btn" onClick={updateStudent}>Update Student</button>
    </div>
  );
}

export default EditStudent;
