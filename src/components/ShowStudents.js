import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styling/ShowStudents.css'; 

function ShowStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/student")
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div className="student-list mt-5">
      <h1 className="text-center mb-4">Student List</h1>
      <div className="row">
        {students.map((student) => (
          <div className="col-md-4 mb-4" key={student.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">
                  <strong>Roll Number:</strong> {student.rollNumber} <br />
                  <strong>Subject:</strong> {student.subject}
                </p>
                <div className="d-flex justify-content-between">
                  <Link to={`/update/${student.id}`} className="btn btn-primary btn-sm">Update</Link>
                  <Link to={`/delete/${student.id}`} className="btn btn-danger btn-sm">Delete</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/add" className="btn btn-success mt-4">Add New Student</Link>
      </div>
    </div>
  );
}

export default ShowStudents;
