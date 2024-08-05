

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './slide';
import Title1 from './Title1';
import CardGallery from './chooseCategory';
import Title2 from './Title2';
import CircleCardGallery from './chooseAge';
import Title3 from './Title3';
import ImageGallery from './chooseBrand';
import ImageComponent from './homeImage';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './footer';





function Homepage() {
  return (
    <div className="App">
      
    
      <Header/>
      <Navbar/>
      <Home/>
       <Title1/>
       <CardGallery/>
      <Title2/>
      <CircleCardGallery/>
      <Title3/>
      <ImageGallery/>
      <ImageComponent/>
      <Footer/>

      
        
    </div>
  );
}

export default Homepage;
