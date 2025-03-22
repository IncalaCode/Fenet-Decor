import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate , Route } from 'react-router-dom';

const Dashboard = () => {
  const HomeButton = () => {
    const navigate = useNavigate();
    
    return (
      <div 
        style={{ 
          padding: '10px 16px', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px' 
        }}
        onClick={() => navigate('/')}
      >
        <HomeIcon /> Home
      </div>
    );
  };

  return (
    <div>
      <HomeButton />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
