import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Email, Phone, Chat, ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function Contact() {
    return (
        <Container maxWidth="lg">

                <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold', marginTop: "100px" }}
            >
                Como você prefere falar comigo?
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
                <Grid size={{ xs: 12, md: 4 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 4 }}>
                            <Email sx={{ fontSize: 40, color: '#000' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>E-mail</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                Tem alguma dúvida?
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                renatorf0910@gmail.com
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 4 }}>
                            <Phone sx={{ fontSize: 40, color: '#000' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Telefone</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                Pode ligar a qualquer hora
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                (12) 99175-2296
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 4 }}>
                            <Chat sx={{ fontSize: 40, color: '#000' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>Chat</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                Precisa de ajuda agora?
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Me chame no WhatsApp
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
}
