import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartSubtotal = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <div className=' basis-1/4'>
      <div className='flex items-end justify-between'>
        <h6 className='font-semibold'>Subtotal</h6>
        <span className=' text-xl font-bold'>
          Php{' '}
          {totalAmount.toLocaleString('en-US', { maximumFractionDigits: 2 })}{' '}
        </span>
      </div>
      <p className=' text-sm text-gray-500 mt-3'>
        Taxes and shipping will calculate in checkout
      </p>

      <div className='flex flex-col gap-6 mt-8'>
        <button className='outline-none border-none py-2 px-5 rounded-md bg-gray-800 text-white cursor-pointer text-sm md:text-base'>
          <Link className='hover:text-slate-300' to='/shop'>
            Continue Shopping
          </Link>
        </button>

        <button className='outline-none border-none py-2 px-5 rounded-md bg-gray-800 text-white cursor-pointer text-sm md:text-base'>
          <Link className='hover:text-slate-300' to='/checkout'>
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CartSubtotal;
