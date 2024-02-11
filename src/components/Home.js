import React, { useState, useEffect } from 'react';
import { Typography, Button, Slide } from '@mui/material';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const pageStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
};

const slideshowContainerStyle = {
  width: '100%', // Set width to 100%
  maxWidth: '800px', // Set maximum width for better responsiveness
  height: '400px', // Set your desired height here
  position: 'relative',
  overflow: 'hidden', // Hide overflow to ensure images touch the edges
  margin: '0 auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for elegance
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
  position: 'absolute',
  top: 0,
  left: 0,
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming you have 3 images
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Placeholder image URLs
  const imageUrls = [image1, image2, image3];

  return (
    <div style={pageStyle}>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Crypto Platform
      </Typography>
      <Typography variant="body1" paragraph>
        We provide cutting-edge solutions for cryptocurrency enthusiasts, investors, and traders. Explore the latest trends, news, and tools to stay ahead in the crypto world.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Featured Content
      </Typography>

      <div style={slideshowContainerStyle}>
        {/* Improved slideshow with transitions */}
        {imageUrls.map((imageUrl, index) => (
          <Slide direction="left" in={currentSlide === index} timeout={500} key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} style={imageStyle} />
          </Slide>
        ))}
      </div>

      <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
        Explore More
      </Button>
    </div>
  );
};

export default Home;
