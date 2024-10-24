import React from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/DeleteStudent.css'; // Add this line for custom CSS

function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:9090/student/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.error("Error deleting student:", error));
  };

  return (
    <div className="delete-student-container mt-5">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h2 className="text-danger mb-4">Delete Student?</h2>
          <p>Are you sure you want to delete this student? This action cannot be undone.</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger mx-2" onClick={handleDelete}>Yes, Delete</button>
            <button className="btn btn-secondary mx-2" onClick={() => navigate('/')}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteStudent;
