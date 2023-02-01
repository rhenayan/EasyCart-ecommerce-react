import React from 'react';

const CheckoutForm = () => {
  return (
    <form>
      <h6 className=' font-semibold text-lg'>Billing Information</h6>
      <div className='flex flex-col'>
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='text'
          placeholder='Enter your name'
        />
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='email'
          placeholder='Enter your email'
        />
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='number'
          placeholder='Phone number'
        />
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='text'
          placeholder='Street Address'
        />
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='text'
          placeholder='City'
        />
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='text'
          placeholder='Postal code'
        />
        <input
          className='"w-full border border-gray-400 mt-2 p-2 rounded-lg'
          type='text'
          placeholder='Country'
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
