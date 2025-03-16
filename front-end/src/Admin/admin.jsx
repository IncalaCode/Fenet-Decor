import React from 'react';
import PropTypes from 'prop-types';
import { AdminNavbar } from './components/navbar';
import './admin.css';

// Default layout configuration
const defaultLayout = {
  navbar: {
    left_side: { 
      logo: { text: "Admin Panel" }, 
      searchbar: true
    },
    center: {
      language: true,
      theme: true,
      items: [
        { label: "Dashboard", onClick: () => console.log("Dashboard clicked") },
        { label: "Pages", onClick: () => console.log("Pages clicked") },
        { label: "Settings", onClick: () => console.log("Settings clicked") }
      ],
      button: [
        { label: "Create New", onClick: () => console.log("Create new clicked") }
      ]
    },
    right: {
      logout: true,
      user_info: { text: "Admin User" }
    }
  }
};

// Main Dashboard Component
const AdminDashboard = ({ layout = defaultLayout, children }) => {
  // Use provided layout or fallback to default layout
  const finalLayout = layout || defaultLayout;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <AdminNavbar layout={finalLayout} />
      <div className="flex-1 p-3 md:p-6 w-full max-w-full overflow-x-hidden">
        {children || <div className="md:p-4">Dashboard Content Goes Here</div>}
      </div>
    </div>
  );
};

// PropTypes for type checking
AdminDashboard.propTypes = {
  layout: PropTypes.shape({
    navbar: PropTypes.shape({
      left_side: PropTypes.shape({
        logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        searchbar: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
      }),
      center: PropTypes.shape({
        language: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        items: PropTypes.array,
        button: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.element]),
      }),
      right: PropTypes.shape({
        logout: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        user_info: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      }),
    }),
  }),
  children: PropTypes.node,
};

export default AdminDashboard;

