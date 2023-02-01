import React from 'react';

import NavLinks from './NavLinks';
import UserNav from './UserNav';
import MobileMenu from './MobileMenu';

const paths = [
  {
    path: 'home',
    display: 'Home',
  },

  {
    path: 'shop',
    display: 'Shop',
  },

  {
    path: 'cart',
    display: 'Cart',
  },
];

const Header = () => {
  return (
    <header className='w-full h-14 flex items-center justify-between px-3 md:px-8 lg:px-16 py-7 bg-white sticky top-0 left-0 z-[999] shadow-[3px_3px_8px_-3px_#ddd]'>
      <h4 className='font-bold text-lg text-gray-900 '>EasyCart</h4>

      <NavLinks paths={paths} />

      <div className='flex items-center gap-x-4 '>
        <UserNav />
        <MobileMenu paths={paths} />
      </div>
    </header>
  );
};

export default Header;
