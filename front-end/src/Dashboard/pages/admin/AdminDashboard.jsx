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
  Rating,
  Chip
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
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PaymentsIcon from '@mui/icons-material/Payments';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CommentIcon from '@mui/icons-material/Comment';

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
    vendors: {
      total: 86,
      change: -2.1,
      increasing: false
    },
    eventPlanners: {
      total: 124,
      change: 7.3,
      increasing: true
    },
    activeBookings: {
      total: 348,
      change: 12.3,
      increasing: true
    }
  };
};

const getMockPaymentsHistory = () => {
  return [
    { id: 1, user: 'John Smith', amount: '$450.00', date: '2023-08-15', status: 'Completed', event: 'Wedding Reception' },
    { id: 2, user: 'Sarah Johnson', amount: '$1,200.00', date: '2023-08-14', status: 'Completed', event: 'Corporate Event' },
    { id: 3, user: 'Michael Brown', amount: '$350.00', date: '2023-08-12', status: 'Pending', event: 'Birthday Party' },
    { id: 4, user: 'Emily Davis', amount: '$800.00', date: '2023-08-10', status: 'Completed', event: 'Anniversary Celebration' },
  ];
};

const getMockFeedback = () => {
  return [
    { id: 1, user: 'Jessica Williams', rating: 5, comment: 'Amazing service! The event was perfect.', date: '2023-08-14' },
    { id: 2, user: 'Robert Taylor', rating: 4, comment: 'Great experience overall. Would recommend.', date: '2023-08-13' },
    { id: 3, user: 'Amanda Miller', rating: 5, comment: 'Exceeded our expectations. Thank you!', date: '2023-08-11' },
    { id: 4, user: 'David Wilson', rating: 3, comment: 'Good service but some delays in communication.', date: '2023-08-09' },
  ];
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(null);
  const [paymentsHistory, setPaymentsHistory] = useState([]);
  const [feedback, setFeedback] = useState([]);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(getMockMetrics());
      setPaymentsHistory(getMockPaymentsHistory());
      setFeedback(getMockFeedback());
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
      </DashboardHeader>

      {/* Metrics Grid */}
      <Typography variant="h6" gutterBottom>
        Key Metrics
      </Typography>
      <Grid container spacing={3} mb={4}>
        {/* Total Users */}
        <Grid item xs={12} sm={6} md={3}>
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

        {/* Vendors */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Vendors
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

        {/* Event Planners */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Event Planners
                </Typography>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <EventAvailableIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.eventPlanners.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.eventPlanners.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.eventPlanners.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.eventPlanners.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>

        {/* Active Bookings */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Active Bookings
                </Typography>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <BookOnlineIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.activeBookings.total}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                {metrics.activeBookings.increasing ? (
                  <ArrowUpwardIcon fontSize="small" color="success" />
                ) : (
                  <ArrowDownwardIcon fontSize="small" color="error" />
                )}
                <Typography 
                  variant="body2" 
                  color={metrics.activeBookings.increasing ? "success.main" : "error.main"}
                  ml={0.5}
                >
                  {metrics.activeBookings.change}%
                </Typography>
              </Box>
            </CardContent>
          </MetricCard>
        </Grid>
      </Grid>

      {/* Payments History and Feedback */}
      <Grid container spacing={3}>
        {/* Payments History */}
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Payments History" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                {paymentsHistory.map((payment) => (
                  <ListItem key={payment.id} divider>
                    <ListItemIcon>
                      <PaymentsIcon color={payment.status === 'Completed' ? 'success' : 'warning'} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`${payment.user} - ${payment.amount}`} 
                      secondary={`${payment.date} • ${payment.event}`}
                    />
                    <Chip 
                      label={payment.status} 
                      color={payment.status === 'Completed' ? 'success' : 'warning'}
                      size="small"
                      sx={{ mr: 1 }}
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
                onClick={() => navigate('/dashboard/payments')}
              >
                View All Payments
              </Button>
            </Box>
          </StyledCard>
        </Grid>

        {/* Feedback */}
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardHeader 
              title="Recent Feedback" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                {feedback.map((item) => (
                  <ListItem key={item.id} divider>
                    <ListItemIcon>
                      <FeedbackIcon color={item.rating >= 4 ? 'success' : item.rating >= 3 ? 'warning' : 'error'} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.user} 
                      secondary={
                        <Box>
                          <Rating value={item.rating} readOnly size="small" sx={{ mb: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            "{item.comment}"
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.date}
                          </Typography>
                        </Box>
                      }
                    />
                    <Button size="small" variant="outlined">Reply</Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/dashboard/feedback')}
              >
                View All Feedback
              </Button>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;