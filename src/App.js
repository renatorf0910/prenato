import { CssBaseline } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Experience from './components/Experience.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';

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
