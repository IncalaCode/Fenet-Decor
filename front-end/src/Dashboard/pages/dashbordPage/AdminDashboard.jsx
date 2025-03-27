
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Avatar,
  CircularProgress
} from '@mui/material';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const MetricCard = styled(StyledCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const DashboardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
}));

const QuickActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: 'none',
}));

// Mock data functions - in a real app these would fetch from API
const getMockMetrics = () => {
  return {
    users: {
      total: 1250,
      change: 5.8,
      increasing: true
    },
    events: {
      total: 348,
      change: 12.3,
      increasing: true
    },
    vendors: {
      total: 86,
      change: -2.1,
      increasing: false
    },
    revenue: {
      total: '$128,450',
      change: 8.4,
      increasing: true
    }
  };
};

const getMockRecentEvents = () => {
  return [
    { id: 1, title: 'Johnson Wedding', date: '2023-08-15', status: 'Confirmed' },
    { id: 2, title: 'Corporate Gala', date: '2023-08-18', status: 'Pending' },
    { id: 3, title: 'Smith Anniversary', date: '2023-08-21', status: 'Confirmed' },
    { id: 4, title: 'Charity Fundraiser', date: '2023-08-25', status: 'Planning' },
  ];
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(null);
  const [recentEvents, setRecentEvents] = useState([]);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(getMockMetrics());
      setRecentEvents(getMockRecentEvents());
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const HomeButton = () => {
    return (
      <Button
        variant="text"
        startIcon={<HomeIcon />}
        onClick={() => navigate('/')}
        sx={{ marginBottom: 2 }}
      >
        Home
      </Button>
    );
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
      <HomeButton />
      
      <DashboardHeader>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome back, Admin
          </Typography>
        </Box>
        
        {/* <Box>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box> */}
      </DashboardHeader>

      {/* Quick action buttons */}
      {/* <Box mb={4} display="flex" flexWrap="wrap">
        <QuickActionButton variant="contained" color="primary" startIcon={<EventIcon />}>
          Create Event
        </QuickActionButton>
        <QuickActionButton variant="contained" color="secondary" startIcon={<PersonAddIcon />}>
          Add User
        </QuickActionButton>
        <QuickActionButton variant="contained" color="info" startIcon={<BusinessCenterIcon />}>
          Manage Vendors
        </QuickActionButton>
        <QuickActionButton variant="outlined" startIcon={<CalendarMonthIcon />}>
          View Calendar
        </QuickActionButton>
      </Box> */}

      {/* Metrics Grid */}
      <Typography variant="h6" gutterBottom>
        Key Metrics
      </Typography>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Total Users
                </Typography>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <PeopleIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.users.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.users.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.users.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.users.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Total Events
                </Typography>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <EventIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.events.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.events.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.events.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.events.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Active Vendors
                </Typography>
                <Avatar sx={{ bgcolor: 'info.main' }}>
                  <BusinessCenterIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.vendors.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.vendors.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.vendors.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.vendors.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Total Revenue
                </Typography>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <AttachMoneyIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.revenue.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.revenue.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.revenue.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.revenue.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>
      </Grid>

      {/* Recent Events and Tasks */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Recent Events" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                {recentEvents.map((event) => (
                  <ListItem key={event.id} divider>
                    <ListItemIcon>
                      <EventIcon color={event.status === 'Confirmed' ? 'success' : 'primary'} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={event.title} 
                      secondary={`${event.date} • ${event.status}`}
                    />
                    <Button size="small" variant="outlined">View</Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/events')}
              >
                View All Events
              </Button>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Pending Tasks" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                <ListItem divider>
                  <ListItemIcon>
                    <TaskIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Review vendor applications" 
                    secondary="3 new applications"
                  />
                  <Button size="small" variant="contained" color="primary">Review</Button>
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <TaskIcon color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Approve event requests" 
                    secondary="5 pending requests"
                  />
                  <Button size="small" variant="contained" color="primary">Approve</Button>
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <TaskIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Update pricing packages" 
                    secondary="Due: Today"
                  />
                  <Button size="small" variant="contained" color="primary">Update</Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Send welcome emails" 
                    secondary="8 new users"
                  />
                  <Button size="small" variant="contained" color="primary">Send</Button>
                </ListItem>
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/tasks')}
              >
                View All Tasks
              </Button>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;