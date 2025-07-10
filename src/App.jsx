
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Settings from './pages/Settings';


// const Register = () => <div className="text-center mt-5">Register Page</div>;
// const Login = () => <div className="text-center mt-5">Login Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
