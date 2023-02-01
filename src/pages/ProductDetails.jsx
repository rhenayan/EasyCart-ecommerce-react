import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import ProductDetail from '../components/Sections/ProductDetail';
import ReviewForm from '../UI/ReviewForm';
import Container from '../UI/Container';
import ProductList from '../UI/ProductList';
import LoadingSpinner from '../UI/LoadingSpinner'
import PageBanner from '../components/Sections/PageBanner';
import { useSingleProductQuery } from '../hooks/useProductsQuery';
import { fetchAllProducts } from '../api/productsApi';
import { useQuery } from 'react-query';

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    data: product,
    status: productStatus,
    error: productError,
  } = useSingleProductQuery(productId);

  // Filter product by the same category
  const {
    data: relatedProducts,
    status: relatedStatus,
    error: relatedError,
  } = useQuery({
    queryKey: ['related'],
    queryFn: fetchAllProducts,
    select: data => {
      const filteredProducts = data.filter(
        data => data.category === product?.category
      );
      return filteredProducts;
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [product]);

  return (
    <Helmet title={product?.title}>
      <PageBanner title={product?.title} />
      <Container>
        {productStatus === 'loading' && <LoadingSpinner/>}
        {productStatus === 'error' && <p>Error: {productError.error}</p>}
        {productStatus === 'success' && <ProductDetail {...product} />}

        <ReviewForm />

        <h2 className=' text-xl font-semibold mt-14 mb-2'>
          You might also like
        </h2>

        {relatedStatus === 'loading' && <LoadingSpinner/> }
        {relatedStatus === 'error' && <p>Error: {relatedError.error}</p>}
        {relatedStatus === 'success' && (
          <ProductList products={relatedProducts} />
        )}
      </Container>
    </Helmet>
  );
};

export default ProductDetails;
