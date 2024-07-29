import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ImageGallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const containerStyle = {
    display: 'flex',
    gap: '10px', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
    padding: '20px', 
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyl8GBZXZiXtYZY03D2lH34PYHY09zyLLRzSKlv09EOj2tkjbx")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
  };

  const imageStyle = {
    width: '150px', 
    height: '100px', 
    objectFit: 'cover', 
    borderRadius: '8px', 
    border: '2px solid yellow', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
    cursor: 'pointer', 
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
  };

  const handleMouseOver = (e) => {
    setHoveredImage(e.target);
    e.target.style.transform = hoverStyle.transform;
    e.target.style.boxShadow = hoverStyle.boxShadow;
  };

  const handleMouseOut = (e) => {
    setHoveredImage(null);
    e.target.style.transform = '';
    e.target.style.boxShadow = '';
  };

  return (
    <Link to="/navcategory2">
    <div style={containerStyle}>
      <img
        src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63fb313795942044b3eb760e/11-480x480.png"
        alt="Placeholder 1"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63fa428eb7d932111226d634/category-thumbnails-2--480x480.png"
        alt="Placeholder 2"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63fb308ca8604c8ae06c0f51/2-480x480.png"
        alt="Placeholder 3"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        src="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63fb313795942044b3eb760e/11-480x480.png"
        alt="Placeholder 4"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        src="data:image/png;base64,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"
        alt="Placeholder 5"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        
        onMouseOut={handleMouseOut}
      />
      <img
        src="data:image/jpeg;base64,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"
        alt="Placeholder 5"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
src="https://static.brandirectory.com/logos/nerf001_nerf.png"      
  alt="Placeholder 5"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjfqxOLtKxn5f46PDHvk7LvpVDu_qKKoxTg&s"
        alt="Placeholder 5"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
     
    </div>
    </Link>
  );
};

export default ImageGallery;
