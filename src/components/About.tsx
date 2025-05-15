import { Container, Typography } from '@mui/material';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const aboutMe = [
    "I have been deeply committed to developing personal and professional projects that strengthen my skills in Python, Django, ReactJS, Docker, and system monitoring with Prometheus and Grafana. Among the most relevant projects, I highlight “Fui Correr”, a platform that lists running events across Brazil with dynamic filters by state, city, and event name. This project challenged me to work with complex Django modeling, optimized queries, and integration with responsive and interactive interfaces. Additionally, I developed a GPU and CPU monitoring dashboard using Flask, SSH scripts for remote data collection, and real-time data visualization through graphs. Later, I integrated this monitoring with tools like Prometheus and Grafana, tackling technical challenges such as efficient metric collection with node-exporter and process-exporter, as well as configuring everything locally with Docker. This experience gave me a deep understanding of observability and performance in distributed systems. In another project, I created an API Gateway with JWT authentication, using both Django REST Framework and C# with ASP.NET Core. This allowed me to explore modern security patterns and system integration, further strengthening my expertise in token-based authentication and environment variable management with .env files. I am also developing a pixel art style game in Unity with C#, targeted for PC. The project includes mechanics such as racing, obstacles, fuel collection, and coin gathering. This challenge has led me to learn not only the language and engine but also best practices for organizing and structuring game projects from the ground up. I have contributed to projects involving reading and analyzing CSV files on the backend, integrated with PostgreSQL running via Docker. In one of these projects, I implemented a high-performance text search based on healthcare operator datasets. I always strive to apply best practices in my projects, focusing on clean code, containerization to facilitate deployment and environment reproducibility, as well as testing and continuous integration. I am also interested in automation and have implemented solutions using subprocess with sshpass for remote command execution, which proved crucial in remote monitoring environments. Finally, I am constantly studying technologies that expand my market possibilities, such as .NET, C#, Entity Framework, and integration with authentication systems like Keycloak. My projects not only solve real problems but also showcase my commitment to continuous learning, overcoming technical challenges, and delivering robust, well-structured solutions."
]

export default function About() {
    return (
        <Container maxWidth="lg">
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold', marginTop: "10px" }}
            >
                Who I'm?
            </Typography>

            <Typography variant="h6" color="text.primary">
                <Typewriter
                    words={aboutMe}
                    cursor
                    cursorStyle="_"
                    typeSpeed={5}
                    delaySpeed={10000}
                />
            </Typography>
        </Container>
    );
}
