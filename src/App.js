import './App.css';
import React from 'react';
import ShowStudents from './components/ShowStudents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent.js';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowStudents />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
