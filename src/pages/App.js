import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import Error from '../components/Error';
import SearchComponent from '../components/OnChange';
import ParticularProduct from './ParticularProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<SearchComponent/>} />
        <Route path="*" element={<Error />} /> {/* Catch-all route for 404 pages */}
        <Route path="/about" element={<ParticularProduct />} /> {/* Route for displaying a particular product */}
      </Routes>
    </Router>
  );
}
export default App;
