import React from 'react';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import CartTable from '../UI/CartTable';
import PageBanner from '../components/Sections/PageBanner';
import Container from '../UI/Container';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <Helmet title='Cart'>
      <PageBanner title='Shopping Cart' />

      <Container>
        <article className=' mt-10 flex flex-col lg:flex-row gap-5'>
          {cartItems.length === 0 ? (
            <h2 className=' text-center text-3xl py-20 flex justify-center items-center'>
              No item added to the cart
            </h2>
          ) : (
            <CartTable />
          )}
        </article>
      </Container>
      {/* <CartTable/> */}
    </Helmet>
  );
};

export default Cart;
