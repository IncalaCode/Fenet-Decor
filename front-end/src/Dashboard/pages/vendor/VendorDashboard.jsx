
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
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    bookings: {
      total: 48,
      change: 12.5,
      increasing: true
    },
    revenue: {
      total: '$24,680',
      change: 8.3,
      increasing: true
    },
    rating: {
      total: '4.8',
      change: 0.2,
      increasing: true
    },
    inquiries: {
      total: 15,
      change: -2.1,
      increasing: false
    }
  };
};

const getMockUpcomingEvents = () => {
  return [
    { id: 1, title: 'Johnson Wedding', date: '2023-08-15', status: 'Confirmed' },
    { id: 2, title: 'Corporate Gala', date: '2023-08-18', status: 'Pending' },
    { id: 3, title: 'Smith Anniversary', date: '2023-08-21', status: 'Confirmed' },
    { id: 4, title: 'Charity Fundraiser', date: '2023-08-25', status: 'Pending' },
  ];
};

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [vendorName, setVendorName] = useState('Elegant Events Co.');

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(getMockMetrics());
      setUpcomingEvents(getMockUpcomingEvents());
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
            Vendor Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome back, {vendorName}
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
          Add New Service
        </QuickActionButton>
        <QuickActionButton variant="contained" color="secondary" startIcon={<AssignmentIcon />}>
          Manage Bookings
        </QuickActionButton>
        <QuickActionButton variant="contained" color="info" startIcon={<BusinessCenterIcon />}>
          Update Profile
        </QuickActionButton>
        <QuickActionButton variant="outlined" startIcon={<CalendarMonthIcon />}>
          View Calendar
        </QuickActionButton>
      </Box> */}

      {/* Metrics Grid */}
      <Typography variant="h6" gutterBottom>
        Business Performance
      </Typography>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Total Bookings
                </Typography>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <EventIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.bookings.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.bookings.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.bookings.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.bookings.change}%
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
                  Revenue
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
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Rating
                </Typography>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <StarIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.rating.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.rating.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.rating.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.rating.change}
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
                  New Inquiries
                </Typography>
                <Avatar sx={{ bgcolor: 'info.main' }}>
                  <BusinessCenterIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.inquiries.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.inquiries.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.inquiries.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.inquiries.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>
      </Grid>

      {/* Upcoming Events and Tasks */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Upcoming Events" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                {upcomingEvents.map((event) => (
                  <ListItem key={event.id} divider>
                    <ListItemIcon>
                      <EventIcon color={event.status === 'Confirmed' ? 'success' : 'warning'} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={event.title} 
                      secondary={`${event.date} • ${event.status}`}
                    />
                    <Button size="small" variant="outlined">Details</Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/vendor/events')}
              >
                View All Events
              </Button>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Action Items" 
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
                    primary="Respond to new inquiries" 
                    secondary="5 new inquiries"
                  />
                  <Button size="small" variant="contained" color="primary">Respond</Button>
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <TaskIcon color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Update service availability" 
                    secondary="For next month"
                  />
                  <Button size="small" variant="contained" color="primary">Update</Button>
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <TaskIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Complete profile" 
                    secondary="2 sections remaining"
                  />
                  <Button size="small" variant="contained" color="primary">Complete</Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Confirm upcoming bookings" 
                    secondary="3 pending confirmations"
                  />
                  <Button size="small" variant="contained" color="primary">Confirm</Button>
                </ListItem>
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/vendor/tasks')}
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

export default VendorDashboard;
