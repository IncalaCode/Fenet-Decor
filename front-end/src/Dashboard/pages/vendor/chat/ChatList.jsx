import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    Button,
} from 'react-admin';
import { useNavigate } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// Test data for bookings
export const testBookings = [
    {
        id: 1,
        userId: 'user1',
        userName: 'John Doe',
        ServiceName: 'Wedding Photography',
        packageType: 'Gold Package',
        bookingDate: '2024-02-15',
        status: 'Confirmed',
        lastMessage: 'Hello, I have a question about the venue.',
        unreadCount: 2
    },
    {
        id: 2,
        userId: 'user2',
        userName: 'Alice Smith',
        ServiceName: 'Birthday Party Planning',
        packageType: 'Silver Package',
        bookingDate: '2024-02-20',
        status: 'Pending',
        lastMessage: 'Can we discuss the menu options?',
        unreadCount: 0
    },
    {
        id: 3,
        userId: 'user3',
        userName: 'Bob Johnson',
        ServiceName: 'Corporate Event',
        packageType: 'Platinum Package',
        bookingDate: '2024-03-01',
        status: 'Confirmed',
        lastMessage: 'Looking forward to the event!',
        unreadCount: 1
    }
];

// Custom ChatButton component that properly handles the record prop
const ChatButton = ({ record }) => {
    const navigate = useNavigate();
    
    if (!record) return null; // Add safety check

    return (
        <Button
            label={record.unreadCount > 0 ? `Chat (${record.unreadCount})` : 'Chat'}
            onClick={() => navigate(`/chat/${record.id}`)}
            startIcon={<ChatBubbleOutlineIcon />}
        >
            {record.unreadCount > 0 ? `Chat (${record.unreadCount})` : 'Chat'}
        </Button>
    );
};

// Custom field to display the last message
const LastMessageField = ({ record }) => {
    if (!record) return null; // Add safety check

    return (
        <span style={{ 
            color: record.unreadCount > 0 ? '#1976d2' : 'inherit',
            fontWeight: record.unreadCount > 0 ? 'bold' : 'normal'
        }}>
            {record.lastMessage}
        </span>
    );
};

const ChatList = () => {
    return (
        <List>
            <Datagrid bulkActionButtons={false}>
                <TextField source="userName" label="Customer Name" />
                <TextField source="ServiceName" label="Service" />
                <TextField source="packageType" label="Package" />
                <DateField source="bookingDate" label="Booking Date" />
                <TextField source="status" label="Status" />
                <LastMessageField source="lastMessage" label="Last Message" />
                <ChatButton />
            </Datagrid>
        </List>
    );
};

export default ChatList;