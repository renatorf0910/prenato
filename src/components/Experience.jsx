import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const experiences = [
  {
    title: "Software Engineer / Full Stack Developer",
    description: "Worked on end-to-end software projects using modern technologies and cloud infrastructure. Led the development of scalable web applications and APIs using Python (Django, Flask, FastAPI) and JavaScript (Node.js, Next.js), with strong focus on containerization via Docker and Docker Compose."
  },
  {
    title: "Backend Developer",
    description: "Built and deployed backend services using Java (Spring Boot, Kotlin) and C# (ASP.NET Core), with secure authentication flows through Keycloak (SSO). Collaborated in cross-functional teams using Agile/Scrum practices, managing CI/CD pipelines and deploying solutions on AWS."
  },
  {
    title: "AI & Mobile Developer",
    description: "Delivered impactful products involving Artificial Intelligence, RESTful APIs, and real-time data processing with Pandas. Also contributed to mobile-first projects with React and React Native, always ensuring maintainability, performance, and user-centered design."
  }
];

function Experience() {
  return (
    <Box sx={{ my: 3, px: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Experiência Profissional
      </Typography>

      <List>
        {experiences.map((exp, index) => (
          <Paper 
            elevation={2} 
            key={index} 
            sx={{ 
              mb: 3, 
              p: 3, 
              borderRadius: 3, 
              backgroundColor: '#f9f9f9',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.12)'
              }
            }}
          >
            <ListItem alignItems="flex-start" disableGutters>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {exp.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="body1" sx={{ mt: 1, color: '#555', lineHeight: 1.6 }}>
                    {exp.description}
                  </Typography>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );
}

export default Experience;
