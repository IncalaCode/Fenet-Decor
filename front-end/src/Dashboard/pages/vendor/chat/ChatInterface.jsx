import React, { useState, useEffect, useRef } from 'react';
import {
    useGetOne,
    useCreate,
    useGetList,
    useGetIdentity,
    Title
} from 'react-admin';
import {
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Avatar,
    Grid,
    CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';

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

    // Get booking details
    const { data: booking, isLoading: bookingLoading } = useGetOne(
        'bookings',
        { id }
    );

    // Get messages
    const { data: messages, isLoading: messagesLoading } = useGetList(
        'messages',
        {
            filter: { bookingId: id },
            sort: { field: 'timestamp', order: 'ASC' }
        }
    );

    const [create] = useCreate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!newMessage.trim()) return;

        create('messages', {
            data: {
                bookingId: id,
                content: newMessage,
                senderId: identity.id,
                timestamp: new Date().toISOString(),
            }
        });

        setNewMessage('');
    };

    if (bookingLoading || messagesLoading) {
        return <CircularProgress />;
    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Title title="Chat" />
            
            {/* Chat Header */}
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">
                    Chat with {booking?.userName} - {booking?.ServiceName}
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
                {messages && messages.map(message => (
                    <Message
                        key={message.id}
                        message={message}
                        isOwn={message.senderId === identity.id}
                    />
                ))}
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