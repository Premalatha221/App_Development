import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const CircleCard = ({ image, alt, link }) => {
  const cardStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ffeb3b', 
    boxSizing: 'border-box',
  };

  return (
    <Card sx={{ ...cardStyle }}>
      <CardActionArea component={Link} to={link} sx={{ height: '100%', width: '100%' }}>
        <CardMedia
          component="img"
          sx={{ height: '100%', width: '100%' }}
          image={image}
          alt={alt}
        />
      </CardActionArea>
    </Card>
  );
};

const CircleCardGallery = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    gap: '20px', 
    
    backgroundImage: 'url("https://i.pinimg.com/564x/6c/3e/f2/6c3ef215ea01bb512538919e11501592.jpg")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
  };

  return (
    <div style={cardContainerStyle}>
      <CircleCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64cbaa19536986266bde0305/8-480x480.png"
        alt="Product 1"
        link="/login"
      />
      <CircleCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64cbb583ee13ab7b1f7b07ee/whatsapp-image-2023-08-03-at-7-37-55-pm-480x480.jpeg"
        alt="Product 2"
        link="/login"
      />
      <CircleCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64cbaae69bc1043cf8d2ecd0/10-480x480.png"
        alt="Product 3"
        link="/login"
      />
      <CircleCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64cbaafebb7d2f263a7cd020/11-480x480.png"
        alt="Product 3"
        link="/login"
      />
    </div>
  );
};

export default CircleCardGallery;
