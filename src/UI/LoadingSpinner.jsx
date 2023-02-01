import React from 'react';
import { BounceLoader } from 'react-spinners';

const LoadingSpinner = ({router}) => (
  <div className={`flex justify-center items-center w-full ${router ? 'h-screen' : 'py-20'}`}>
    <BounceLoader color='#001330' loading size={60} speedMultiplier={1} />
  </div>
);

export default LoadingSpinner;
