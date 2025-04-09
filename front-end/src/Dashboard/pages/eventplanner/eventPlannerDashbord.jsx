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
  CircularProgress,
  Chip
} from '@mui/material';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

const StatusChip = styled(Chip)(({ theme, status }) => ({
  fontWeight: 'bold',
  backgroundColor: 
    status === 'Planning' ? theme.palette.info.light :
    status === 'Confirmed' ? theme.palette.success.light :
    status === 'Pending' ? theme.palette.warning.light :
    theme.palette.grey[300],
  color: 
    status === 'Planning' ? theme.palette.info.contrastText :
    status === 'Confirmed' ? theme.palette.success.contrastText :
    status === 'Pending' ? theme.palette.warning.contrastText :
    theme.palette.text.primary,
}));

// Mock data functions - in a real app these would fetch from API
const getMockMetrics = () => {
  return {
    activeEvents: {
      total: 12,
      change: 20,
      increasing: true
    },
    clientCount: {
      total: 28,
      change: 15.3,
      increasing: true
    },
    budget: {
      total: '$45,800',
      change: 8.7,
      increasing: true
    },
    completionRate: {
      total: '92%',
      change: 3.5,
      increasing: true
    }
  };
};

const getMockUpcomingEvents = () => {
  return [
    { 
      id: 1, 
      title: 'Johnson Wedding', 
      date: '2023-08-15', 
      status: 'Planning',
      location: 'Grand Plaza Hotel',
      clientName: 'Sarah Johnson'
    },
    { 
      id: 2, 
      title: 'Corporate Retreat', 
      date: '2023-08-18', 
      status: 'Confirmed',
      location: 'Mountain View Resort',
      clientName: 'Tech Innovations Inc.'
    },
    { 
      id: 3, 
      title: 'Smith Anniversary', 
      date: '2023-08-21', 
      status: 'Planning',
      location: 'Lakeside Gardens',
      clientName: 'John & Mary Smith'
    },
    { 
      id: 4, 
      title: 'Charity Gala', 
      date: '2023-08-25', 
      status: 'Pending',
      location: 'City Convention Center',
      clientName: 'Hope Foundation'
    },
  ];
};

const EventPlannerDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [plannerName, setPlannerName] = useState('Jessica Williams');

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
            Event Planner Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome back, {plannerName}
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
        <QuickActionButton variant="contained" color="primary" startIcon={<AddIcon />}>
          Create New Event
        </QuickActionButton>
        <QuickActionButton variant="contained" color="secondary" startIcon={<PeopleIcon />}>
          Manage Clients
        </QuickActionButton>
        <QuickActionButton variant="contained" color="info" startIcon={<CalendarMonthIcon />}>
          View Calendar
        </QuickActionButton>
        <QuickActionButton variant="outlined" startIcon={<AttachMoneyIcon />}>
          Budget Tracker
        </QuickActionButton>
      </Box> */}

      {/* Metrics Grid */}
      <Typography variant="h6" gutterBottom>
        Planning Overview
      </Typography>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Active Events
                </Typography>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <EventIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.activeEvents.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.activeEvents.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.activeEvents.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.activeEvents.change}%
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
                  Client Count
                </Typography>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <PeopleIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.clientCount.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.clientCount.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.clientCount.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.clientCount.change}%
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
                  Total Budget
                </Typography>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <AttachMoneyIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.budget.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.budget.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.budget.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.budget.change}%
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
                  Completion Rate
                </Typography>
                <Avatar sx={{ bgcolor: 'info.main' }}>
                  <CheckCircleIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.completionRate.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.completionRate.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.completionRate.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.completionRate.change}%
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
                  <ListItem key={event.id} divider sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Box display="flex" width="100%" alignItems="center" mb={1}>
                      <EventIcon color="primary" sx={{ mr: 2 }} />
                      <Box flexGrow={1}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {event.clientName}
                        </Typography>
                      </Box>
                      <StatusChip 
                        label={event.status} 
                        status={event.status} 
                        size="small" 
                      />
                    </Box>
                    <Box display="flex" width="100%" justifyContent="space-between" pl={5}>
                      <Box display="flex" alignItems="center">
                        <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} color="action" />
                        <Typography variant="body2">{event.date}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} color="action" />
                        <Typography variant="body2">{event.location}</Typography>
                      </Box>
                      <Button size="small" variant="outlined" color="primary">Details</Button>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/planner/events')}
              >
                View All Events
              </Button>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Planning Tasks" 
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
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Venue Visit: Grand Plaza Hotel" 
                    secondary="For Johnson Wedding • Aug 5, 2023"
                  />
                  <Button size="small" variant="contained" color="primary">Confirm</Button>
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <RestaurantIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Menu Tasting: Elite Catering" 
                    secondary="For Corporate Retreat • Aug 8, 2023"
                  />
                  <Button size="small" variant="contained" color="primary">Schedule</Button>
                </ListItem>
                <ListItem divider>
                  <ListItemIcon>
                    <MusicNoteIcon color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Finalize Entertainment" 
                    secondary="For Charity Gala • Due Aug 10, 2023"
                  />
                  <Button size="small" variant="contained" color="primary">Review</Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhotoCameraIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Book Photographer" 
                    secondary="For Smith Anniversary • Due Aug 7, 2023"
                  />
                  <Button size="small" variant="contained" color="primary">Book</Button>
                </ListItem>
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/planner/tasks')}
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

export default EventPlannerDashboard;