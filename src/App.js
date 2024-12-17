import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage'; // Import the DetailsPage
import PropertyAdd from './admin/PropertyAdd';
import Login from './RegisterLogin/Login';
import Register from './RegisterLogin/Register';
import ForgotPassword from './RegisterLogin/ForgotPassword';
import AboutUs from './mainPage/AboutUs'


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Admin Page to Add Property */}
        <Route path="/PropertyAdd" element={<PropertyAdd />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* Details Page */}
        <Route path="/details/:id" element={<DetailsPage />} /> {/* Updated to DetailsPage */}
        
      </Routes>
    </Router>
  );
}
