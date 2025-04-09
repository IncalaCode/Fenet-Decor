import React from 'react';

// Import icons for resources
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PasswordIcon from '@mui/icons-material/Password';
import VendorIcon from '@mui/icons-material/Store';
import ChartIcon from '@mui/icons-material/BarChart';
import user from '@mui/icons-material/Person';
import feedback from '@mui/icons-material/Feedback';
import payemnt from '@mui/icons-material/Payment';

// Import components from the pages folder
import AdminDashboard from '../pages/admin/AdminDashboard';
import VendorDashboard from '../pages/vendor/VendorDashboard';
import EventPlannerDashboard from '../pages/eventplanner/eventPlannerDashbord';
import EventChart from '../pages/user/EventChart';

// Import Event Planner components
import EventPlannerList from '../pages/admin/EventPlanner/EventPlannerList';
import EventPlannerEdit from '../pages/admin/EventPlanner/EventPlannerEdit';
import EventPlannerCreate from '../pages/admin/EventPlanner/EventPlannerCreate';
import EventPlannerShow from '../pages/admin/EventPlanner/EventPlannerShow';

// Import Password components
import AdminPasswordEdit from '../pages/admin/Password/PasswordEdit';
import userPasswordEdit from '../pages/user/Password/PasswordEdit';
import eventplannerPasswordEdit from '../pages/eventplanner/Password/PasswordEdit'
import vendorPasswordEdit from '../pages/vendor/Password/PasswordEdit';;

// Import Vendor components
import VendorList from '../pages/admin/Vendor/VendorList';
import VendorEdit from '../pages/admin/Vendor/VendorEdit';
import VendorCreate from '../pages/admin/Vendor/VendorCreate';
import VendorShow from '../pages/admin/Vendor/VendorShow';

// Import Events components
import EventsList from '../pages/vendor/Events/EventsList';
import EventsEdit from '../pages/vendor/Events/EventsEdit';
import EventsCreate from '../pages/vendor/Events/EventsCreate';
import EventsShow from '../pages/vendor/Events/EventsShow';
import userCreate from '../pages/admin/user/userCreate';
import userEdit from '../pages/admin/user/userEdit';
import userList from '../pages/admin/user/userList';
import feedbackList from '../pages/admin/feedback/feedbacklist';

export const adminResources = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: AdminDashboard,
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
    name: 'vendor',
    label: 'Vendor',
    icon: VendorIcon,
    list: VendorList,
    edit: VendorEdit,
    create: VendorCreate,
    show: VendorShow,
  },
  {
    name: 'user',
    label: 'user',
    icon: user,
    list: userList,
    edit: userEdit,
    create: userCreate,
  },
  {
    name: 'feedback',
    label: 'Feedback',
    icon: feedback,
    list: feedbackList,
  },
  {
    name: 'payemnt',
    label: 'Payemnt',
    icon: payemnt,
    list: feedbackList,
  },
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: AdminPasswordEdit,
  }
];

// Define resources for Event Planner role
export const eventPlannerResources = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: EventPlannerDashboard,
  },
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: eventplannerPasswordEdit,
  }
];

// Define resources for Vendor role
export const vendorResources = [
  { 
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: VendorDashboard,
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
    list: vendorPasswordEdit,
  }
];

// Define resources for User role
export const userResources = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    list: AdminDashboard,
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
    list: userPasswordEdit,
  }
  // transaction hitory
];

