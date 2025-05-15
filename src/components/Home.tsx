import React from 'react';
import { Container, Typography, Box, Button, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import StackCarousel from "./StackCarousel.tsx";
import Footer from './Footer.jsx';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 3 }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={12} alignItems="center">
                    <Grid size={{ xs: 7, md: 5 }} sx={{ textAlign: 'center' }}>
                        <Avatar
                            alt="Renato Rocha Ferreira"
                            src="https://github.com/renatorf0910.png"
                            sx={{ width: 350, height: 350, mx: 'auto', mb: 2, mt: 10 }}
                        />
                        <Typography variant="h6" color="text.primary">
                            <Typewriter
                                words={[
                                    'Full Stack developer'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1500}
                            />
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 6, md: 7 }} sx={{ textAlign: 'center' }}>
                        <StackCarousel />

                        <Typography variant="h4" component="h1" gutterBottom>
                            Hi, I'm Renato Rocha Ferreira
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            I have solid experience in developing APIs, scalable web systems, infrastructure and virtual servers.
                        </Typography>

                        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                            <Typewriter
                                words={[
                                    'Python Developer',
                                    'Django Expert',
                                    'ReactJS Lover',
                                    'Performance-Focused Dev'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={60}
                                deleteSpeed={30}
                                delaySpeed={1500}
                            />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </motion.div>

    );
}
