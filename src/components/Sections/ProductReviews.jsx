import React from 'react';

const ProductReviews = ({ review, productDesc }) => {
 
  return (
    <section>
      <div className=' flex items-center gap-12 font-semibold text-base '>
        <button
          className= ' font-bold'
        >
          Description
        </button>
       
      </div>

      {tab === 'desc' ? (
        <article className='mt-8 px-3'>
          <p className='leading-7'>{productDesc}</p>
        </article>
      ) : (
        <article className='mt-8 px-3'>
          <div>
            <ul>
              {review.map((item, i) => (
                <li key={i} className='mb-4'>
                  <h6>John Smith</h6>
                  <span className='text-orange-500 font-semibold'>{item.rating}(rating)</span> 
                  <p className='mt-2'>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </section>
  );
};

export default ProductReviews;
