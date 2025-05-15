import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Header from './components/Header.jsx';
import About from './components/About.tsx';
import Experience from './components/Experience.jsx';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
    </Router>
  );
}
