import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { image, title, category, price, id } = product;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    );

    toast.success('Product added successfully');
  };

  return (
    <article className=' cursor-pointer'>
      <figure className='h-80 scale-75'>
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={image}
          alt='Product Image'
          className='object-contain h-full w-full'
        />
      </figure>
      <div className=' mt-1'>
        <h3 className=' text-lg  font-semibold'>
          <Link to={`/shop/${id}`}>{title}</Link>
        </h3>
        <span className=' text-sm capitalize'>{category}</span>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <span className='text-lg font-semibold'>
          Php {price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
        </span>

        <motion.svg
          whileTap={{ scale: 1.2 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-7 h-7 cursor-pointer'
          onClick={addToCart}
        >
          <path
            fill-rule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z'
            clip-rule='evenodd'
          />
        </motion.svg>
      </div>
    </article>
  );
};

export default ProductCard;
