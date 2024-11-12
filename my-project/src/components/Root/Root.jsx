import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Root = () => {
     return (
          <div>
               
               <Header></Header>
               <Outlet></Outlet>
               
          </div>
     );
};

export default Root;