import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CoachingHome.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const mission = "To guide students with expert mentorship, innovative teaching methods, and continuous motivation, helping them achieve their academic and career goals.";
  const vision = "To inspire a generation of learners by providing quality education, innovative methods, and unwavering support to help students achieve their dreams.";

  const slides = [
    {
      img: 'https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg',
      heading: 'Welcome to Inspired Vision Coaching',
      text: 'Shaping Mind, Building Futures Empowering students through quality education and mentorship.'
    },
    {
      img: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg',
      heading: 'Our Vision',
      text: vision
    },
    {
      img: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      heading: 'Our Mission',
      text: mission
    }
  ];

  return (
    <Box>
      {/* Carousel */}
      <Slider {...settings} className="carousel">
        {slides.map((slide, index) => (
          <Box key={index} className="carousel-slide">
            <img src={slide.img} alt={slide.heading} className="carousel-image" />
            <Box className="carousel-overlay" />
            <Box className="carousel-content">
              <Typography variant="h3" component="h2" className="carousel-title">
                {slide.heading}
              </Typography>
              <Typography variant="body1" className="carousel-text">
                {slide.text}
              </Typography>
              {/* Always display both Vision & Mission on first slide */}
              {index === 0 && (
                <>
                  {/* <Typography variant="body2" className="carousel-text" sx={{ mt: 2 ,fontStyle: 'italic' }}>
                    Vision: {vision}
                  </Typography>
                  <Typography variant="body2" className="carousel-text" sx={{ mt: 1, fontStyle: 'italic' }}>
                    Mission: {mission}
                  </Typography> */}
                </>
              )}
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              About Inspired Vision Coaching
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem' }}>
              We are dedicated to providing a supportive and challenging learning environment where students can excel academically and personally. With experienced faculty and a commitment to excellence, we help learners reach their full potential.
            </Typography>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={500}>
              Key Offerings:
            </Typography>
            <ul style={{ fontSize: '1.1rem', color: '#444' }}>
              <li>Experienced Mentors & Faculty</li>
              <li>Interactive Classrooms & Digital Support</li>
              <li>Focus on Competitive Exams & Boards</li>
              <li>Personal Guidance & Motivation</li>
              <li>Regular Tests & Performance Tracking</li>
            </ul>
          </Grid> */}
        </Grid>
      </Container>

    </Box>
  );
};

export default HomePage;

