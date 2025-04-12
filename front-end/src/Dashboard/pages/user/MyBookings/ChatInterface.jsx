import React, { useState, useEffect, useRef } from 'react';
import {
    useGetIdentity,
    Title
} from 'react-admin';
import {
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Grid,
    CircularProgress,
    Divider
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';

// Test bookings data
const testBookings = [
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

// Test messages data
const testMessages = [
    {
        id: 1,
        bookingId: 1,
        content: "Hi, I have a question about the venue setup.",
        senderId: "user1",
        senderName: "User",
        timestamp: "2024-02-10T10:00:00Z"
    },
    {
        id: 2,
        bookingId: 1,
        content: "Sure, I'd be happy to help! What would you like to know?",
        senderId: "vendor1",
        senderName: "Vendor",
        timestamp: "2024-02-10T10:05:00Z"
    },
    {
        id: 3,
        bookingId: 1,
        content: "What time can we start setting up?",
        senderId: "user1",
        senderName: "User",
        timestamp: "2024-02-10T10:10:00Z"
    },
    // Add messages for other bookings
    {
        id: 4,
        bookingId: 2,
        content: "Hello, regarding the menu options...",
        senderId: "user2",
        senderName: "User",
        timestamp: "2024-02-11T09:00:00Z"
    },
    {
        id: 5,
        bookingId: 3,
        content: "Looking forward to the corporate event!",
        senderId: "user3",
        senderName: "User",
        timestamp: "2024-02-12T14:00:00Z"
    }
];

const Message = ({ message, isOwn }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: isOwn ? 'flex-end' : 'flex-start',
            mb: 2,
        }}
    >
        <Box
            sx={{
                maxWidth: '70%',
                backgroundColor: isOwn ? '#1976d2' : '#f5f5f5',
                color: isOwn ? 'white' : 'black',
                padding: 2,
                borderRadius: 2,
            }}
        >
            <Typography>{message.content}</Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {new Date(message.timestamp).toLocaleTimeString()}
            </Typography>
        </Box>
    </Box>
);

const ChatInterface = () => {
    const { id } = useParams(); // booking ID
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    const { identity } = useGetIdentity();
    const [error, setError] = useState(null);

    // Find the booking and its messages
    const booking = testBookings.find(b => b.id === parseInt(id));
    const messages = testMessages.filter(m => m.bookingId === parseInt(id));

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!newMessage.trim()) return;
        
        // In a real app, you'd send this to your API
        const newMsg = {
            id: testMessages.length + 1,
            bookingId: parseInt(id),
            content: newMessage,
            senderId: identity?.id || 'user1', // Fallback to user1 for testing
            senderName: "User",
            timestamp: new Date().toISOString()
        };

        // In a real app, this would be handled by the API
        testMessages.push(newMsg);
        
        console.log('Sending message:', newMessage);
        setNewMessage('');
        scrollToBottom();
    };

    if (!booking) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography color="error">Booking not found</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column', p: 2 }}>
            {/* Chat Header */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">
                    {booking.ServiceName} - {booking.vendorName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {booking.packageType} • Event Date: {new Date(booking.bookingDate).toLocaleDateString()}
                </Typography>
            </Paper>

            {/* Messages Area */}
            <Paper 
                sx={{ 
                    flex: 1, 
                    overflow: 'auto', 
                    p: 2,
                    mb: 2,
                    maxHeight: 'calc(100vh - 250px)'
                }}
            >
                {messages.length === 0 ? (
                    <Typography align="center" color="textSecondary">
                        No messages yet. Start the conversation!
                    </Typography>
                ) : (
                    messages.map(message => (
                        <Message
                            key={message.id}
                            message={message}
                            isOwn={message.senderId === (identity?.id || 'user1')}
                        />
                    ))
                )}
                <div ref={messagesEndRef} />
            </Paper>

            {/* Message Input */}
            <Paper sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSend();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={handleSend}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ChatInterface;