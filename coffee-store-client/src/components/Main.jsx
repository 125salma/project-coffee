import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
          <div className='max-w-6xl mx-auto'>
          
          <Header></Header>
          <Outlet></Outlet>
          </div>
          <Footer></Footer>

        </div>
    );
};

export default Main;