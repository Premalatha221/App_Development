import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Footer from './components/footer';
import Homepage from './components/HomePage';
import Signup from './components/Register'
import Login from './components/Login';
import TermsAndConditions from './components/terms';
import contact from './contact';
import Contact from './contact';
import PrivacyPolicy from './privacy';
import FAQ from './faq';
import NavCategory from './components/navCategory';
import ProfilePage from './components/profile';
import Wishlist from './components/wishlist';
import Orders from './components/order';
import Sidebar from './components/sidebar';






function App() {
  return (
    <div className="App">
     <Router>
     
      <Routes>
       
      <Route exact path="/" element={ <Homepage />}/>
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/terms" element={<TermsAndConditions/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/privacy" element={<PrivacyPolicy/>} />
        <Route exact path="/faq" element={<FAQ/>} />
        <Route exact path="/sidebar" element={<Sidebar/>} />
        <Route exact path="/navCategory" element={<NavCategory/>}/>
        <Route exact path="/profile" element={<ProfilePage/>}/>
        <Route exact path="/wishlist" element={<Wishlist/>}/>
        <Route exact path="/orders" element={<Orders/>}/>
        
      </Routes>
    </Router>
     
      
   
    
      
        
    </div>
  );
}

export default App;
