import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Paper, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to trigger a success toast notification
  const handleToast = () => {
    toast.success("Thank you for your interest in Inspired Vision Coaching!");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, background: '#f9f9f9' }}>
        {/* About Us Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Avatar
              alt="Inspired Vision Coaching"
              src="https://via.placeholder.com/400x400.png?text=Inspired+Vision"
              sx={{ width: '100%', height: 'auto', borderRadius: 3 }}
              variant="square"
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Welcome to Inspired Vision Coaching
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
              At Inspired Vision Coaching, we believe in nurturing each student's potential with dedication, guidance, and personalized support. We provide a comprehensive learning environment for students to excel in their academic pursuits, including school exams, competitive entrance exams, and other skill-building programs.
            </Typography>
          </Grid>
        </Grid>

        {/* Vision */}
        <Box mt={6}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
            "To inspire a generation of learners by providing quality education, innovative methods, and unwavering support to help students achieve their dreams."
          </Typography>
        </Box>

        {/* Mission */}
        <Box mt={6}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
            "To guide students with expert mentorship, innovative teaching methods, and continuous motivation, helping them achieve their academic and career goals."
          </Typography>
        </Box>

        {/* Events */}
        <Box mt={6}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Upcoming Events
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: "Mock Test for Entrance Exams", date: "July 15, 2025", desc: "An intensive mock test session for students preparing for entrance exams." },
              { title: "Interactive Workshop on Time Management", date: "August 5, 2025", desc: "A workshop to teach students how to manage time effectively." },
              { title: "Career Counseling Session", date: "September 1, 2025", desc: "Personalized career advice for students based on their goals and aspirations." }
            ].map((event, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: '#fff', border: '1px solid #ddd' }}>
                  <Typography variant="h6" fontWeight={600}>{event.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{event.date}</Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: '#777' }}>{event.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Meet the Team */}
        <Box mt={6}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member}>
                <Box textAlign="center">
                  <Avatar
                    alt={`Team Member ${member}`}
                    src={`https://randomuser.me/api/portraits/men/${member * 10}.jpg`}
                    sx={{ width: 100, height: 100, margin: 'auto', mb: 1 }}
                  />
                  <Typography variant="subtitle1" fontWeight={600}>
                    Faculty Member {member}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#777' }}>
                    Subject Expert
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Social Media Links */}
        <Box mt={6} textAlign="center">
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Connect With Us
          </Typography>
          <Box>
            <Button onClick={handleToast} sx={{ margin: '0 10px' }}>
              <FaFacebookF size={24} />
            </Button>
            <Button onClick={handleToast} sx={{ margin: '0 10px' }}>
              <FaTwitter size={24} />
            </Button>
            <Button onClick={handleToast} sx={{ margin: '0 10px' }}>
              <FaLinkedinIn size={24} />
            </Button>
            <Button onClick={handleToast} sx={{ margin: '0 10px' }}>
              <FaInstagram size={24} />
            </Button>
          </Box>
        </Box>

        {/* Toast Notification */}
        <ToastContainer />

      </Paper>
    </Container>
  );
};


