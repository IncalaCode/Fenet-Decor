import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/landingPage";
import Aboutuspage from "./pages/Aboutuspage";
import Testimonialpage from './pages/testimonalspage';
import ContactPage from './pages/contactpage';
import SignUp from './pages/SignUp';
import Login from './pages/Login'; 
import AdminDashboard from './Admin/admin';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userType = localStorage.getItem('user_type') || '';
  const isAllowed = allowedRoles.some(role => userType.includes(role));
  return isAllowed ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <BrowserRouter>
      {/* Global Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<Aboutuspage />} />
        <Route path="/Testimonal" element={<Testimonialpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />


        
        {/* Protected route example (uncomment and modify as needed)
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        */}
        
        {/* Catch all route - redirects to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
