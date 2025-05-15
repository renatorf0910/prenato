import React from 'react';
import Slider from "react-slick";
import { Box, Typography, useTheme } from "@mui/material";

const skills = [
  "Python", "Django", "Django REST", "ReactJS", "React Native",
  "Docker", "Git + SSH", "SQL", "Linux", "API REST", "Flask", "C#", "ASP.NET", "HTML/CSS", "Bootstrap"
];

export default function StackCarousel() {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ my: 5 }}>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              p: 1,
              textAlign: "center",
              background: theme.palette.background.paper,
              borderRadius: 0.2,
              mx: 10,
              boxShadow: 0.9,
            }}
          >
            <Typography variant="body1">{skill}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
