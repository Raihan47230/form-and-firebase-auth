import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <nav className='flex justify-center gap-6'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/Loggin'}>Loggin</Link>
                    <Link to={'/SingUp'}>SingUp</Link>
               </nav>
          </div>
     );
};

export default Header;