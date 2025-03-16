import React from 'react';
import AdminDashboard from './admin';

// Example custom components
const CustomSearchBar = () => (
  <div className="custom-search">
    <input type="text" placeholder="Search anything..." />
    <button>🔍</button>
  </div>
);

const CustomButton = ({ label, onClick }) => (
  <button 
    style={{ 
      backgroundColor: '#ff6b6b', 
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px'
    }} 
    onClick={onClick}
  >
    {label}
  </button>
);

// Example dashboard configuration
const dashboardLayout = {
  navbar: {
    left_side: {
      logo: "https://example.com/logo.png", // Or use text: { text: "Admin Panel" }
      // For custom component: logo: { customElement: <YourCustomLogo /> }
      searchbar: true // Or use customElement: <CustomSearchBar />
    },
    center: {
      language: true, // Or use { options: ['English', 'French', 'German'] }
      theme: true,
      items: [
        { label: "Dashboard", onClick: () => console.log("Dashboard clicked") },
        { 
          label: "Users", 
          dropdown: [
            { label: "View All", onClick: () => console.log("View all users") },
            { label: "Add New", onClick: () => console.log("Add new user") }
          ]
        },
        { 
          label: "Settings", 
          dropdown: [
            { label: "General", onClick: () => console.log("General settings") },
            { label: "Security", onClick: () => console.log("Security settings") }
          ]
        }
      ],
      button: [
        { label: "Create New", onClick: () => console.log("Create new clicked") },
        <CustomButton key="custom" label="Export" onClick={() => console.log("Export clicked")} />
      ]
    },
    right: {
      user_info: "https://example.com/user-avatar.jpg", // Or use { text: "John Doe" }
      logout: true // Or use { onLogout: () => yourLogoutFunction() }
    }
  }
};

const AdminDashboardExample = () => {
  return (
    <AdminDashboard layout={dashboardLayout} />
  );
};

export default AdminDashboardExample;