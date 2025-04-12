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
import UserDashbord from '../pages/user/UserDashboard';

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
import ServiceCreate from '../pages/vendor/manageServices/ServiceCreate';
import ServiceEdit from '../pages/vendor/manageServices/ServiceEdit';
import ServiceList from '../pages/vendor/manageServices/ServiceList';

import userCreate from '../pages/admin/user/userCreate';
import userEdit from '../pages/admin/user/userEdit';
import userList from '../pages/admin/user/userList';
import feedbackList from '../pages/admin/feedback/feedbacklist';
import VendorpayemntList from '../pages/vendor/payment/payementList';


// chat in vendo side 
import ChatList from '../pages/vendor/chat/ChatList';
import ChatInterface from '../pages/vendor/chat/ChatInterface';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import MyBookingsList from '../pages/user/MyBookings/MyBookingsList';
import ChatInterfaceUser from '../pages/user/MyBookings/ChatInterface';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import userpayemntList from '../pages/user/payment/payementList';


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
    name: 'Mangeservices',
    label: 'Mange Services',
    icon: EventIcon,
    list: ServiceList,
    edit: ServiceEdit,
    create: ServiceCreate,
  },
  {
    name: 'chats',
    list: ChatList,
    show: ChatInterface,
    icon: ChatBubbleOutlineIcon,
  },
  {
    name:"Vendorpayemnt",
    label : "payemnt",
    icon : payemnt,
    list :VendorpayemntList

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
    list: UserDashbord,
  },
  {
    name: 'my-bookings',
    list: MyBookingsList,
    show: ChatInterfaceUser,
    icon: BookOnlineIcon,
    options: { label: 'My Bookings' }
  },
  {
    name: 'userpayemntList',
    label: 'payemnt',
    icon: payemnt,
    list: userpayemntList,
  },
  {
    name: 'password',
    label: 'Password',
    icon: PasswordIcon,
    list: userPasswordEdit,
  },
];

