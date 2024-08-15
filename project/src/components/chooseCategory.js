import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ActionAreaCard = ({ image, alt, link }) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardActionArea component={Link} to={link}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={alt}
        />
      </CardActionArea>
    </Card>
  );
};

const CardGallery = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    gap: '20px', 
    padding: '20px', 
    backgroundImage: 'url("https://i.pinimg.com/564x/6c/3e/f2/6c3ef215ea01bb512538919e11501592.jpg")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
   
  };

  return (
    <div style={cardContainerStyle}>
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64399b009c171c604cf08946/102-480x480.png"
        alt="Product 1"
        link="/navCategory"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64399b1c1c63e660124a0fb2/100-480x480.png"
        alt="Product 2"
       link="/navCategory"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a6a359c25f1bb758abec/category-thumbnails-9--480x480.png"
        alt="Product 3"
        link="/navCategory"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64399b3a1c63e660124a11ac/98-480x480.png"
        alt="Product 4"
        link="/navCategory"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a6098943cbba27ef31b3/category-thumbnails-7--480x480.png"
        alt="Product 4"
        link="/navCategory"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a64fc3695eb9c4a71c56/category-thumbnails-8--480x480.png"
        alt="Product 4"
        link="/navCategory"
      />
    </div>
  );
};

export default CardGallery;
