import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage'; // Import the DetailsPage
import PropertyAdd from './admin/PropertyAdd';
import Register from './mainPage/Regiter';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Admin Page to Add Property */}
        <Route path="/PropertyAdd" element={<PropertyAdd />} />
        <Route path="/Register" element={<Register />} />
        

        {/* Details Page */}
        <Route path="/details/:id" element={<DetailsPage />} /> {/* Updated to DetailsPage */}
        
      </Routes>
    </Router>
  );
}
