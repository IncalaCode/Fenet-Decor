import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    Button,
    useGetIdentity,
    FunctionField,
    useRedirect,
} from 'react-admin';
import { 
    Box, 
    Chip, 
    Typography 
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import testDataProvider from '../../../dataProvider/testDataProvider';

// Test data for bookings
export const testBookings = [
    {
        id: 1,
        ServiceName: 'Wedding Photography',
        packageType: 'Gold Package',
        bookingDate: '2024-02-15',
        status: 'Confirmed',
        price: 1200,
        vendorName: 'John Photography',
        lastMessage: 'Hello, I have a question about the venue.',
        unreadCount: 2
    },
    {
        id: 2,
        ServiceName: 'Birthday Party Planning',
        packageType: 'Silver Package',
        bookingDate: '2024-02-20',
        status: 'Pending',
        price: 800,
        vendorName: 'Party Planners Inc',
        lastMessage: 'Can we discuss the menu options?',
        unreadCount: 0
    },
    {
        id: 3,
        ServiceName: 'Corporate Event',
        packageType: 'Platinum Package',
        bookingDate: '2024-03-01',
        status: 'Confirmed',
        price: 2500,
        vendorName: 'Elite Events',
        lastMessage: 'Looking forward to the event!',
        unreadCount: 1
    }
];

const StatusField = ({ record }) => {
    if (!record) return null;

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'confirmed':
                return 'success';
            case 'pending':
                return 'warning';
            case 'cancelled':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <Chip 
            label={record.status} 
            color={getStatusColor(record.status)}
            size="small"
        />
    );
};

const PackageField = ({ record }) => {
    if (!record || !record.packageType) return null;

    const getPackageColor = (packageType) => {
        const type = packageType.toLowerCase().split(' ')[0];
        switch (type) {
            case 'platinum':
                return '#1a237e'; // Dark blue
            case 'gold':
                return '#ff9800'; // Gold
            case 'silver':
                return '#757575'; // Silver
            default:
                return '#000000';
        }
    };

    return (
        <Typography style={{ 
            color: getPackageColor(record.packageType),
            fontWeight: 'bold'
        }}>
            {record.packageType}
        </Typography>
    );
};

const ChatButton = ({ record }) => {
    const redirect = useRedirect();
    
    if (!record) return null;

    const handleClick = () => {
        // Redirect to the chat show view with the booking ID
        redirect('show', 'my-bookings', record.id);
    };

    return (
        <Button
            label={record.unreadCount > 0 ? `Chat (${record.unreadCount})` : 'Chat'}
            onClick={handleClick}
            startIcon={<ChatBubbleOutlineIcon />}
        >
            {record.unreadCount > 0 ? `Chat (${record.unreadCount})` : 'Chat'}
        </Button>
    );
};

const MyBookingsList = () => {
    const { identity } = useGetIdentity();

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
                My Bookings
            </Typography>
            <List 
                resource="my-bookings"
                filter={{ userId: identity?.id }}
                sort={{ field: 'bookingDate', order: 'DESC' }}
                actions={false}
                exporter={false}
                dataProvider={testDataProvider}
            >
                <Datagrid bulkActionButtons={false}>
                    <TextField source="ServiceName" label="Service" />
                    <TextField source="vendorName" label="Vendor" />
                    <PackageField source="packageType" label="Package" />
                    <DateField source="bookingDate" label="Event Date" />
                    <FunctionField
                        label="Price"
                        render={record => record ? `$${record.price}` : ''}
                    />
                    <StatusField source="status" label="Status" />
                    <ChatButton />
                </Datagrid>
            </List>
        </Box>
    );
};

export default MyBookingsList;