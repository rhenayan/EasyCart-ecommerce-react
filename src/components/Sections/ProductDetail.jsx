import React from 'react';
import StarRatings from '../../UI/StarRatings';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetail = product => {
  const { image, title, price,  description, category, id } =
    product;
   
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image,
        title,
        price,
      })
    );

    toast.success('Product added successfully')
  };

  return (
    <section className=' mt-14 mb-8 flex flex-col lg:flex-row h-screen gap-5'>
      <div className=' basis-1/2 self-center'>
        <img
          className=' mix-blend-multiply h-full scale-75 '
          src={image}
          alt='Product Image'
        />
      </div>

      <div className='basis-1/2 mt-5'>
        <h2 className='text-2xl font-semibold mb-3'>{title}</h2>
        <div className='flex items-center gap-2 mb-3 '>
        <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-5 h-5 text-orange-500'
      >
        <path
          fill-rule='evenodd'
          d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
          clip-rule='evenodd'
        />
      </svg>
          <p className=''>
            (<span className=' text-orange-500 font-medium'>{product?.rating?.rate}</span> / 5)
          </p>
        </div>

        <div className='flex items-center gap-5'>
          <span className=' text-xl font-medium'>Php {price}</span>
          <span>Category : {category?.toUpperCase()} </span>
        </div>

        <p className=' mt-3'>{description}</p>

        <motion.button
          whileTap={{ scale: 1.2 }}
          className='outline-none border-none py-2 px-5 rounded-md bg-gray-800 text-white cursor-pointer text-sm md:text-base mt-10'
          onClick={addToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </section>
  );
};

export default ProductDetail;
