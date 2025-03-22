import React from 'react';

// Import icons for resources
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PasswordIcon from '@mui/icons-material/Password';
import VendorIcon from '@mui/icons-material/Store';
import ChartIcon from '@mui/icons-material/BarChart';

// Import components from the pages folder
import Dashboard from '../pages/Dashboard';
import EventChart from '../pages/EventChart';

// Import Event Planner components
import EventPlannerList from '../pages/EventPlanner/EventPlannerList';
import EventPlannerEdit from '../pages/EventPlanner/EventPlannerEdit';
import EventPlannerCreate from '../pages/EventPlanner/EventPlannerCreate';
import EventPlannerShow from '../pages/EventPlanner/EventPlannerShow';

// Import Password components
import PasswordEdit from '../pages/Password/PasswordEdit';

// Import Vendor components
import VendorList from '../pages/Vendor/VendorList';
import VendorEdit from '../pages/Vendor/VendorEdit';
import VendorCreate from '../pages/Vendor/VendorCreate';
import VendorShow from '../pages/Vendor/VendorShow';

// Import Events components
import EventsList from '../pages/Events/EventsList';
import EventsEdit from '../pages/Events/EventsEdit';
import EventsCreate from '../pages/Events/EventsCreate';
import EventsShow from '../pages/Events/EventsShow';

export const adminResources = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: Dashboard,
  },
  {
    name: 'event-planner',
    label: 'Event Planner',
    icon: EventIcon,
    list: EventPlannerList,
    edit: EventPlannerEdit,
    create: EventPlannerCreate,
    show: EventPlannerShow,
  },
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: PasswordEdit,
  }
];

// Define resources for Event Planner role
export const eventPlannerResources = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: Dashboard,
  },
  {
    name: 'vendor',
    label: 'Vendor',
    icon: VendorIcon,
    list: VendorList,
    edit: VendorEdit,
    create: VendorCreate,
    show: VendorShow,
  },

  // aproval and aigin and subaccount 
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: PasswordEdit,
  }
];

// Define resources for Vendor role
export const vendorResources = [
  { 
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: Dashboard,
  },
  {
    name: 'events',
    label: 'Events',
    icon: EventIcon,
    list: EventsList,
    edit: EventsEdit,
    create: EventsCreate,
    show: EventsShow,
  },
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: PasswordEdit,
  }
];

// Define resources for User role
export const userResources = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: Dashboard,
  },
  {
    name: 'event-cart',
    label: 'Event cart',
    icon: ChartIcon,
    list: EventChart,
  },
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: PasswordEdit,
  }
];

