import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import counterImage from '../../assets/images/counter-timer-img.png';
import Clock from '../../UI/Clock';

const TimerCount = () => {
  return (
    <section className='h-80 mt-16 px-2 md:px-8 lg:px-16 flex items-center   bg-gray-800'>
      <div className=' w-full text-center lg:basis-6/12 text-white   '>
        <h4 className=' text-base font-semibold mb-1'>Limited Offers</h4>
        <h3 className=' text-xl font-semibold'>Quality Armchair</h3>

        <Clock />

        <motion.button
          whileTap={{ scale: 1.2 }}
          className=' bg-slate-50 text-slate-800 text-sm md:text-base font-semibold outline-none border-none py-2 px-5 rounded-md hover:text-slate-700'
        >
          <Link to='/shop'>Visit Store</Link>
        </motion.button>
      </div>

      <div className=' hidden lg:basis-6/12 lg:flex lg:justify-end'>
        <img
          className=' w-[70%] h-[70%] object-contain'
          src={counterImage}
          alt='Counter Image'
        />
      </div>
    </section>
  );
};

export default TimerCount;
