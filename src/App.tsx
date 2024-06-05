// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes> {/* Wrap your routes in a Routes component */}
        <Route path="/signin" element={<SignInPage />} /> {/* Use Route inside Routes */}
        <Route path='/signup' element = {<SignUpPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
