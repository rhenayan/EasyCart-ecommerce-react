import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='px-2 md:px-8 lg:px-16 pt-10 pb-7 mt-20 bg-gray-800 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div>
        <h1 className='font-bold text-lg mb-4'>EasyCart</h1>

        <p className='font-light text-sm text-gray-500'>
        Shop the Best in Clothing, Accessories, and Electronics. From cutting-edge tech to fashion-forward threads, we have everything you need to elevate your style and simplify your life.
        </p>
      </div>

      <div>
        <h4 className=' font-semibold text-base mb-4'>Top Categories</h4>
        <ul className='mb-3'>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400 hover:text-gray-300' to='#'>Women's Clothing</Link>
          </li>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400 hover:text-gray-300' to='#'>Men's Clothing</Link>
          </li>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400 hover:text-gray-300' to='#'>Jewelery</Link>
          </li>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400 hover:text-gray-300' to='#'>Electronics</Link>
          </li>
        </ul>
      </div>

      <div >
        <h4 className=' font-semibold text-base mb-4'>Useful Links</h4>
        <ul className='mb-3'>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400  hover:text-gray-300' to='/shop'>Shop</Link>
          </li>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400  hover:text-gray-300' to='/cart'>Cart</Link>
          </li>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400 hover:text-gray-300' to='/login'>Login</Link>
          </li>
          <li className='mb-3'>
            <Link className='text-sm text-gray-400  hover:text-gray-300' to='#'>Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div >
        <h4 className=' font-semibold text-base mb-4'>Contact</h4>
        <ul className='mb-3'>
          <li className='flex gap-2 mb-3'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='text-gray-400 w-5 h-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
            </span>
            <p className='text-sm text-gray-400'>Address</p>
          </li>
          <li className='flex gap-2 mb-3'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='text-gray-400 w-5 h-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
            </span>
            <p className='text-sm text-gray-400'>+0881234567890</p>
          </li>
          <li className='flex gap-2 mb-3'>
            <span>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='text-gray-400 w-5 h-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
            </span>
            <p className='text-sm text-gray-400'>examples123@gmail.com</p>
          </li>
        
        </ul>
      </div>
      </div>
      
      
      <div className='text-center mt-10 text-xs text-gray-500'>
        <p >Copyright {year} </p>
      </div>
    </footer>
  );
};

export default Footer;
