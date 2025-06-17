import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* The <Outlet> component will render the matched child route (e.g., NewsletterPage) */}
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;