// Import React and necessary components
import React, { useState, useEffect } from 'react';
import { Button, Slide } from '@mui/material';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import '../index.css'; // Import your global CSS file

// Define styles for the components
const pageStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
};

const slideshowContainerStyle = {
  width: '100%',
  height: '400px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '10px'
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

// Define the Home component
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const imageUrls = [image1, image2, image3];

  return (
    <div>
      <div style={slideshowContainerStyle}>
        {imageUrls.map((imageUrl, index) => (
          <Slide direction="left" in={currentSlide === index} timeout={500} key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} style={imageStyle} />
          </Slide>
        ))}
      </div>
      <div style={pageStyle}>
        <div className="lilita-one-regular" style={{ fontSize: '5rem', marginBottom: '0.35em' }}>
          Welcome to Our Crypto Platform
        </div>
        <div className="roboto-regular" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          We provide cutting-edge solutions for cryptocurrency enthusiasts, investors, and traders. Explore the latest trends, news, and tools to stay ahead in the crypto world.
        </div>
        <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default Home;
