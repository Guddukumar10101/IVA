import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { FaWhatsapp, FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGlobe } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import './Footer.css';

export const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="container">
        {/* Contact Column */}
        <Box className="footer-column">
          <Typography variant="h6" className="footer-heading">Contact Us</Typography>
          <Box className="footer-item"><MdEmail /> ivworldinfo@gmail.com</Box>
          <Box className="footer-item"><IoCallOutline /> +91 9155829051</Box>
          <Box className="footer-item"><FaWhatsapp /> +91 8197013384</Box>
          <Box className="footer-item site">
            <FaGlobe /> <a href="https://ivworlds.com" target="_blank" rel="noopener noreferrer">ivworlds.com</a>
          </Box>
        </Box>

        {/* Social Column */}
        <Box className="footer-column">
          <Typography variant="h6" className="footer-heading">Follow Us</Typography>
          <Box className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </Box>
        </Box>

        {/* Address Column */}
        <Box className="footer-column">
          <Typography variant="h6" className="footer-heading">Our Address</Typography>
          <Box className="footer-item loc">
            <FaLocationDot />
            <Typography variant="body2">
              Plot No. 2065, Daladali Chowk,<br /> Simalia, Near Ring Road,<br /> Ranchi-835222, Jharkhand.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box className="footer-bottom">
        <Typography variant="caption">© 2025 Inspired Vision Coaching. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

// import React from 'react'
// import { FaWhatsapp } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import './Footer.css'
// export const Footer = () => {
//   return (
//     <div className='Footer'>
    
//     <div className='column c'>
// <div className='H'>Contact</div>
//   <div><MdEmail/>ivworldinfo@gmail.com</div>
//   <div><IoCallOutline/>9155829051,8197013384</div>
//   <div className="site"><FaGlobe/> <a href="https://ivworlds.com/">ivwords.com</a></div>


//     </div>
//     <div className='c'> 
//       <div className="H">Social Media</div>
//       <div><a href="#"><FaTwitterSquare/>twitter</a></div>
//      <div><a href=""><FaInstagramSquare/>instagram</a></div>
//      <div><a href=""><FaLinkedin/>LInked-In</a></div>
//   </div>
   
   
   
//     <div className=' c3'>
//       <div className="H">Address</div><div className='loc'><FaLocationDot/><div>Inspired Vision, Jharkhand
// Plot No. 2065, Daladali Chowk,
// Simalia, Near Ring Road,
// Ranchi-835222.</div>

// </div></div>

//      </div>
//   )
// }
