import React from 'react';
import Container from './Container';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import CartSubtotal from './CartSubtotal';

const tableHeader = ['Image', 'Title', 'Price', 'Qty', 'Delete'];

const CartTable = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <>
      <table className='table-fixed border-collapse basis-3/4 '>
        <thead>
          <tr className=' text-left border border-b-1 border-t-transparent border-x-transparent leading-10'>
            {tableHeader.map((header, i) => (
              <th className='px-2' key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {cartItems.map(item => (
            <CartItems cartItem={item} key={item.id} />
          ))}
        </tbody>
      </table>

      <CartSubtotal />
    </>
  );
};

export default CartTable;
