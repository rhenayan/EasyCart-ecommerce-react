import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import userIcon from '../../assets/images/user-icon.png';

const UserNav = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <span className='cursor-pointer relative text-gray-900'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>
        <span className='absolute  bottom-[50%]  left-3 z-10 rounded-full bg-slate-900 text-white  w-4 h-4 text-xs text-center font-semibold content-none'>
          0
        </span>
      </span>
      <span
        className='cursor-pointer relative text-gray-900'
        onClick={navigateToCart}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
        <span className='absolute  bottom-[50%]  left-3  z-10 rounded-full bg-slate-900 text-white w-4 h-4 text-xs text-center font-semibold content-none'>
          {totalQuantity}
        </span>
      </span>
      <span className='cursor-pointer'>
        <motion.img
          whileTap={{ scale: 1.2 }}
          className='w-5 h-5'
          src={userIcon}
          alt='User Icon'
        />
      </span>
    </>
  );
};

export default UserNav;
