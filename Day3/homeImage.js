import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ImageComponent = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/navcategory'); 
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      boxSizing: 'border-box',
    },
    image: {
      width: '100%',
      maxWidth: '1400px',
      height: 'auto', 
      cursor: 'pointer', 
    },
    '@media screen and (max-width: 1024px)': {
      image: {
        maxWidth: '1000px', 
      },
    },
    '@media screen and (max-width: 768px)': {
      image: {
        maxWidth: '100%',
      },
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/rakshabandhan24_desktop_get_ready_170724_01.jpg"
        alt="Raksha Bandhan"
        style={styles.image}
        onClick={handleClick} 
      />
      <style>
        {`
          @media screen and (max-width: 1024px) {
            .responsive-image {
              max-width: 1000px; /* Adjust the maximum width for medium screens */
            }
          }

          @media screen and (max-width: 768px) {
            .responsive-image {
              max-width: 100%; /* Ensure image fits within the screen width */
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageComponent;
