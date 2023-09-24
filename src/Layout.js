import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './Layout.scss';

function Layout({ children }) {
  return (
    <div>
      <Navbar classeName="nav-bar"/> 
      <main>
        {children}
      </main>
      <Footer classeName="footerF"/>
    </div>
  );
}

export default Layout;

