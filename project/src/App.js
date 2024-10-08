import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Homepage from './components/HomePage';
import Signup from './components/Register'
import Login from './components/Login';
import TermsAndConditions from './components/terms';
import Contact from './components/contact';
import PrivacyPolicy from './components/privacy';
import FAQ from './components/faq';
import NavCategory from './components/navCategory';
import Brand from './components/brand';
import Age from './components/age';
import NavCategory2 from './components/navcategory2';
import NavCategory3 from './components/navcategory3';
import PaymentPage from './components/payment';
import PaymentDone from './components/done';
import SidebarLinks from './components/sidebar';
import DashBoard from './components/dashboard';
import ProfileBoard from './components/prodashboard';
import ProfileWish from './components/profilewish';
import ProfileOrder from './components/profileorder';
import AdminLayout from './adminlayout';
import AdminDashboard from './admindashboard';
import Layout from './adminlayout';
import AdminProducts from './adminproducts';
import CustomerPage from './admincustomer';
import AdminCustomers from './admincustomer';
import AdminOrders from './adminorders';
import React, { useState } from 'react';
import AddressPage from './components/address';
import OrderSummaryPage from './components/ordersummary';
import CartSummary from './components/ordersummary';
import Footer from './components/footer';
import FeedbackPage from './components/feedback';
import WishlistPage from './components/wishlist';
import CommonNav from './components/commonNav';
import OrderTrackingPage from './components/orderTracking';
import Profile from './components/prof';
import AdminProfile from './adminprofile';
import AppInitializer from './components/AppIntializer';
import GamesPage from './components/games';
import EducationPage from './components/education';
import DisneyPage from './components/disney';
import MarvelPage from './components/marvel';
import BarbiePage from './components/barbie';
import Age0To3Page from './components/agezero';
import Age4To6Page from './components/ageThree';
import Age6To9Page from './components/agelast';
function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
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
        <Route exact path="/sidebar" element={<SidebarLinks/>} />
        <Route exact path="/dashboard" element={<DashBoard/>} />
        <Route exact path="/board" element={<ProfileBoard/>} />
        <Route exact path="/profilewish" element={<ProfileWish/>}/>
        <Route exact path="/orders" element={<ProfileOrder/>}/>
        
       
        <Route exact path="/navCategory" element={<NavCategory/>}/>
        <Route exact path="/brand" element={<Brand/>}/>
        <Route exact path="/age" element={<Age/>}/>
        <Route exact path="/navCategory2" element={<NavCategory2/>}/>
        <Route exact path="/navCategory3" element={<NavCategory3/>}/>
        <Route exact path="/payment" element={<PaymentPage/>}/>
        <Route exact path="/done" element={<PaymentDone/>}/>
        <Route path="/admin" element={<Layout/>}>
        <Route index path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/products" element={<AdminProducts/>}/>
        <Route path="/admin/customers" element={<AdminCustomers/>}/>
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/admin/profile" element={<AdminProfile/>}/>
        
      
        </Route>
        <Route path="/address" element={<AddressPage/>}/>
        <Route path="/ordersummary" element={<OrderSummaryPage/>}/>
        <Route path="/commonnav" element={<CommonNav/>}/>
        <Route path="/feedback" element={<FeedbackPage/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/tracking" element={<OrderTrackingPage/>}/>
        <Route path="/prof" element={<Profile/>}/>
        <Route path="/games" element={<GamesPage/>}/>
        <Route path="/education" element={<EducationPage/>}/>
        <Route path="/disney" element={<DisneyPage/>}/>
        <Route path="/Marvel" element={<MarvelPage/>}/>
        <Route path="/barbie" element={<BarbiePage/>}/>
        <Route path="/agezero" element={<Age0To3Page/>}/>
        <Route path="/agethree" element={<Age4To6Page/>}/>
        <Route path="/agelast" element={<Age6To9Page/>}/>
      
      </Routes>
    </Router>    
    </div>
  );
}

export default App;
