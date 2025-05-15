import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: 'Experiences', path: '/experiences' },
        { label: 'Contact', path: '/contact' },
        { label: "Who I'm?", path: '/about' },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>
                    RenatoRF
                </Typography>
                <Box>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            color="inherit"
                            onClick={() => navigate(item.path)}
                            sx={{ mx: 1, textTransform: 'none' }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
