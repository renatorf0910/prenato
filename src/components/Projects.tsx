import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

declare module '@mui/material/styles' {
    interface Palette {
      ochre: Palette['primary'];
    }
  
    interface PaletteOptions {
      ochre?: PaletteOptions['primary'];
    }
  }
  
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      ochre: true;
    }
  }
  
  const theme = createTheme({
    palette: {
      ochre: {
        main: '#000',
        contrastText: '#FFF',
      },
    },
  });

const projects = [
    {
        title: "Fui Correr",
        description: "Plataforma para encontrar corridas de rua no Brasil com filtros por estado e cidade.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/fui-correr",
    },
    {
        title: "Painel de Monitoramento",
        description: "Dashboard com dados de GPU e CPU integrando Prometheus e Grafana.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/painel-monitoramento",
    },
    {
        title: "Clone Trello",
        description: "Sistema de quadros e tarefas inspirado no Trello com React e Django.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/clone-trello",
    },
    {
        title: "Painel de Monitoramento",
        description: "Dashboard com dados de GPU e CPU integrando Prometheus e Grafana.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/painel-monitoramento",
    },
    {
        title: "Clone Trello",
        description: "Sistema de quadros e tarefas inspirado no Trello com React e Django.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/clone-trello",
    },
    {
        title: "Painel de Monitoramento",
        description: "Dashboard com dados de GPU e CPU integrando Prometheus e Grafana.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/painel-monitoramento",
    },
    {
        title: "Clone Trello",
        description: "Sistema de quadros e tarefas inspirado no Trello com React e Django.",
        image: "https://picsum.photos/200/300",
        link: "/projetos/clone-trello",
    },
];

export default function Projects() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 10, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {project.description}
                                        </Typography>
                                        <Button style={{ display: 'flex' }} variant="contained" color="ochre" href={project.link}>
                                            Ver Projeto
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
