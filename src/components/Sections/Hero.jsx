import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section
      className='w-full bg-hero bg-no-repeat bg-cover  px-3 py-16   
    md:px-8  lg:px-16'
    >
      <div className=' w-full lg:w-1/2 md:w-4/5 mt-8 lg:mt-12'>
        <p className='text-base lg:text-lg font-semibold'>
          Trending product in {year}
        </p>
        <h2 className=' text-3xl lg:text-4xl font-semibold my-3'>
          Upgrade Your Life with Our Latest Collection.
        </h2>
        <p className='text-base lg:text-lg'>
          Shop the Best in Clothing, Accessories, and Electronics. From
          cutting-edge tech to fashion-forward threads, we have everything you
          need to elevate your style and simplify your life.
        </p>
        <motion.button
          whileTap={{ scale: 1.2 }}
          className='outline-none border-none py-2 px-5 rounded-md bg-gray-800 text-white cursor-pointer text-sm md:text-base mt-10 '
        >
          <Link className='hover:text-slate-300' to='/shop'>
            SHOP NOW{' '}
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
