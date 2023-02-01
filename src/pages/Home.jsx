import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import Hero from '../components/Sections/Hero';
import Services from '../components/Sections/Services';
import TimerCount from '../components/Sections/TimerCount';
import {
  useElectronicsQuery,
  useJeweleryQuery,
  useMensClothingQuery,
  useWomenClothingQuery,
} from '../hooks/useProductsQuery';
import LoadingSpinner from '../UI/LoadingSpinner';
import ProductList from '../UI/ProductList';
import Heading from '../UI/Title';

const Home = () => {
  const {
    data: jewelery,
    isLoading: jewIsLoading,
    isError: jewIsError,
    error: jewError,
  } = useJeweleryQuery();

  const {
    data: electronics,
    isLoading: elecIsLoading,
    isError: elecIsError,
    error: elecError,
  } = useElectronicsQuery();

  const {
    data: mensClothing,
    isLoading: menIsLoading,
    isError: menIsError,
    error: menError,
  } = useMensClothingQuery();

  const {
    data: womensClothing,
    isLoading: womenIsLoading,
    isError: womenIsError,
    error: womenError,
  } = useWomenClothingQuery();

  const errorMessage = error => <h1>An error has occurred: {error.message}</h1>;

  return (
    <Helmet title={'Home'}>
      <Hero />
      <Services />
      <Heading text='Trending Products' />

      {jewIsLoading ? <LoadingSpinner /> : <ProductList products={jewelery} />}

      {jewIsError && errorMessage(jewError)}

      <Heading text='Best Sales' />

      {womenIsLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductList products={womensClothing} />
      )}

      {womenIsError && errorMessage(womenError)}

      <TimerCount />

      <Heading text='New Arrivals' />

      {menIsLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductList products={mensClothing} />
      )}

      {menIsError && errorMessage(menError)}

      <Heading text='Popular in Category' />

      {elecIsLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductList products={electronics} />
      )}

      {elecIsError && errorMessage(elecError)}
    </Helmet>
  );
};

export default Home;
