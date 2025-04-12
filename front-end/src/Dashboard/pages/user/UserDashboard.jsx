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
import PaymentIcon from '@mui/icons-material/Payment';
import TaskIcon from '@mui/icons-material/Task';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';

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

// Mock data for user dashboard
const getMockMetrics = () => {
  return {
    totalSpent: {
      total: '$2,480',
      lastMonth: '$580'
    },
    activeBookings: {
      total: 3,
      pending: 1
    },
    upcomingEvents: {
      total: 2,
      nextDate: '2024-03-15'
    }
  };
};

// Mock data for transactions
const getMockTransactions = () => {
  return [
    {
      id: 1,
      service: 'Wedding Photography',
      amount: '$800',
      date: '2024-02-10',
      status: 'Completed',
      vendor: 'John Photography'
    },
    {
      id: 2,
      service: 'Catering Service',
      amount: '$1,200',
      date: '2024-02-05',
      status: 'Pending',
      vendor: 'Gourmet Caterers'
    },
    {
      id: 3,
      service: 'Venue Booking',
      amount: '$2,500',
      date: '2024-01-28',
      status: 'Completed',
      vendor: 'Royal Gardens'
    },
    {
      id: 4,
      service: 'DJ Services',
      amount: '$400',
      date: '2024-01-15',
      status: 'Completed',
      vendor: 'Party Mix DJs'
    }
  ];
};

// Mock data for upcoming events
const getMockUpcomingEvents = () => {
  return [
    {
      id: 1,
      title: 'Wedding Photography Session',
      date: '2024-03-15',
      vendor: 'John Photography',
      status: 'Confirmed'
    },
    {
      id: 2,
      title: 'Catering Tasting Session',
      date: '2024-03-01',
      vendor: 'Gourmet Caterers',
      status: 'Pending'
    }
  ];
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [userName, setUserName] = useState('John Smith');

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(getMockMetrics());
      setTransactions(getMockTransactions());
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
            My Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome back, {userName}
          </Typography>
        </Box>
      </DashboardHeader>

      {/* Metrics Grid */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Total Spent
                </Typography>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <AttachMoneyIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.totalSpent.total}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last Month: {metrics.totalSpent.lastMonth}
              </Typography>
            </CardContent>
          </MetricCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Active Bookings
                </Typography>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <BookOnlineIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.activeBookings.total}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {metrics.activeBookings.pending} Pending Confirmation
              </Typography>
            </CardContent>
          </MetricCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <MetricCard>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="text.secondary" gutterBottom>
                  Upcoming Events
                </Typography>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <EventIcon />
                </Avatar>
              </Box>
              <Typography variant="h4" component="div">
                {metrics.upcomingEvents.total}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Next Event: {new Date(metrics.upcomingEvents.nextDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </MetricCard>
        </Grid>
      </Grid>

      {/* Transaction History and Upcoming Events */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <StyledCard>
            <CardHeader 
              title="Payment Transaction History" 
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                {transactions.map((transaction) => (
                  <ListItem key={transaction.id} divider>
                    <ListItemIcon>
                      <ReceiptIcon color={transaction.status === 'Completed' ? 'success' : 'warning'} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={transaction.service}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {transaction.vendor}
                          </Typography>
                          {` • ${transaction.date}`}
                        </React.Fragment>
                      }
                    />
                    <Box display="flex" alignItems="center" gap={1}>
                      <Chip 
                        label={transaction.status} 
                        size="small"
                        color={transaction.status === 'Completed' ? 'success' : 'warning'}
                      />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {transaction.amount}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={5}>
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
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {event.vendor}
                          </Typography>
                          {` • ${new Date(event.date).toLocaleDateString()}`}
                        </React.Fragment>
                      }
                    />
                    <Chip 
                      label={event.status} 
                      size="small"
                      color={event.status === 'Confirmed' ? 'success' : 'warning'}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box p={2} display="flex" justifyContent="center">
              <Button 
                variant="text" 
                color="primary" 
                onClick={() => navigate('/my-bookings')}
                startIcon={<BookOnlineIcon />}
              >
                View All Bookings
              </Button>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;