import React, { useEffect, useState } from 'react';
import PageBanner from '../components/Sections/PageBanner';
import Helmet from '../components/Helmet/Helmet';
import Filters from '../UI/Filters';
import ProductList from '../UI/ProductList';
import { useAllProductsQuery } from '../hooks/useProductsQuery';
import LoadingSpinner from '../UI/LoadingSpinner';

const Shop = () => {
  const { data: allProducts, status, error } = useAllProductsQuery();

  const [products, setProducts] = useState(allProducts);

  const onProductCategory = category => {
    const filteredProducts = allProducts?.filter(
      prod => prod.category === category
    );

    setProducts(filteredProducts);
  };

  const onProductSearch = product => {
    const filteredProducts = allProducts.filter(prod =>
      prod.title.toLowerCase().includes(product.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  return (
    <Helmet title='Shop'>
      <PageBanner title='Products' />
      <Filters onCategory={onProductCategory} onSearch={onProductSearch} />

      <section className='mt-10'>
        {status === 'loading' && <LoadingSpinner/>}
        {status === 'error' && <p>Error: {error.message}</p>}

        {!products ? (
          <ProductList products={allProducts} />
        ) : products?.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <h1 className='text-center text-4xl'>No products found!</h1>
        )}
      </section>
    </Helmet>
  );
};

export default Shop;
