import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import LoadingSpinner from '../UI/LoadingSpinner';

const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));

const Routers = () => {
  return (
    
    <Suspense fallback={<LoadingSpinner router/>}>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:productId' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
