import React, { useState, useEffect } from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Box from '@mui/material/Box';
import { adminResources, eventPlannerResources, vendorResources, userResources } from './layout/resources';
import dataProvider from './dataProvider/testDataProvider';

// Custom loader component only to hide the admin panel while loading
const Loader = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: 2
    }}
  >
    <LoadingSpinner />
    <div>Loading Wedding Planner Admin...</div>
  </Box>
);

const AdminPanel = () => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  
    const role = localStorage.getItem('userRole');
    setUserRole(role || 'user'); 
    
    return () => clearTimeout(loadingTimer);
  }, []);
  
  if (loading) {
    return <Loader />;
  }
  
  // Define resources based on user role using arrays
  const getResourcesForRole = () => {
    const roleResources = {
      'admin': adminResources,
      'event-planner': eventPlannerResources,
      'vendor': vendorResources,
      'user': userResources
    };
    
    return roleResources[userRole] || userResources;
  };
  
  // Render resources from the array
  const renderResources = () => {
    const resources = getResourcesForRole();
    
    return resources.map((resource, index) => (
      <Resource
        key={index}
        name={resource.name}
        options={{ label: resource.label }}
        icon={resource.icon}
        list={resource.list}
        edit={resource.edit}
        create={resource.create}
        show={resource.show}
      />
    ));
  };
  
  return (
    <Admin
      dataProvider={dataProvider}
      title="Wedding Planner Admin"
      loginPage={null}
      basename="/dashboard"
    >
      {renderResources()}
    </Admin>
  );
};

export default AdminPanel;
