import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import PageBanner from '../components/Sections/PageBanner';
import CheckoutForm from '../UI/CheckoutForm';
import CheckoutSummary from '../UI/CheckoutSummary';
import Container from '../UI/Container';

const Checkout = () => {
  return (
    <Helmet title='Checkout'>
      <PageBanner title='Checkout' />
      <Container>
        <section className='flex flex-col lg:flex-row lg:gap-10 mt-10 '>
          <div className=' basis-8/12'>
            <CheckoutForm />
          </div>

          <div className=' basis-6/12 mt-5 lg: m-0'>
            <CheckoutSummary />
          </div>
        </section>
      </Container>
    </Helmet>
  );
};

export default Checkout;
