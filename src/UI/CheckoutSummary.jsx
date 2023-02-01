import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const CheckoutSummary = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div className='flex flex-col text-base bg-slate-800 text-white rounded-md p-5'>
      <h6 className='flex items-center justify-between mb-4'>
        Total Qty: <span>{totalQty}</span>
      </h6>
      <h6 className='flex items-center justify-between mb-4'>
        Subtotal: <span>Php {totalAmount}</span>
      </h6>
      <h6 className='flex items-center justify-between mb-4'>
        Shipping: <br /> free shipping <span>0</span>
      </h6>

      <h4 className=' flex items-center justify-between text-xl mb-8 border-t border-solid border-slate-600 pt-1'>
        Total Cost: <span>Php {totalAmount}</span>
      </h4>
      <button className='outline-none border-none py-2 px-5 rounded-md bg-slate-100 text-slate-800 cursor-pointer text-sm md:text-base'>
        <Link to='/login'>Place an order</Link>
      </button>
    </div>
  );
};

export default CheckoutSummary;
