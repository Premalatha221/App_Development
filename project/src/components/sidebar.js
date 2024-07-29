import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{marginLeft:'100px'}}>
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"style={{ marginLeft: '1%' }}></i>}>
          <a href="" className="text-decoration-none" style={{ color: 'inherit' }}>
            Toy Marche
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
            
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/wishlist" activeClassName="activeClicked">
        <CDBSidebarMenuItem icon="fas fa-heart">Wishlist</CDBSidebarMenuItem>
      </NavLink>

      <NavLink exact to="/orders" activeClassName="activeClicked">
        <CDBSidebarMenuItem icon="fas fa-box">Orders</CDBSidebarMenuItem>
      </NavLink>
      <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-sign-out-alt">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>


      </CDBSidebar>
    </div>
    </div>
  );
};

export default Sidebar;