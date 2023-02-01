import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ReviewForm = () => {
  const [reviewUser, setReviewUser] = useState('');
  const [reviewMessage, setReviewMessage] = useState('');
  const [rating, setRating] = useState(null)


  //get value for user name
  const handleReviewUserChange = e => {
    const reviewUsername = e.target.value;
    setReviewUser(reviewUsername);
  }

  //get value for message
  const handleReviewMessageChange = e => {
    const reviewUserMessage = e.target.value;
    setReviewMessage(reviewUserMessage);
  }

  // SUBMIT THE FORM
  const submitHandler = e => {
    e.preventDefault();

  //data to be sent to the backend
    const reviewData = {
      userName: reviewUser,
      message: reviewMessage,
      rating: rating
    }

    console.log('Review submitted successfully:', reviewData )
   
    //clear fields upon form submission
    setReviewUser('');
    setReviewMessage('');

    toast.success('Review submitted successfully!')
  };


  return (
    <article className=' mt-20'>
      <h4 className='text-xl font-semibold mb-8'> Leave your experience</h4>

      {/* FORM */}
      <form action='' className=' w-9/12 m-auto' onSubmit={submitHandler}>
        <div className=' mb-7'>
          <input
            type='text'
            placeholder='Enter name'
            className='w-full border border-solid border-slate-900 rounded py-2 px-5 focus:outline-none'
            value={reviewUser}
            onChange={handleReviewUserChange}
            required
          />
        </div>

        {/*  ADD REVIEW RATING */}

        <div className='flex gap-1 md:gap-2 lg:gap-5 mb-4 text-orange-500 font-semibold'>
          <motion.button whileTap={{scale: 1.2}} type='button' className='flex gap-1' onClick={() => setRating(1)}>
            1
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 '
            >
              <path
                fill-rule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                clip-rule='evenodd'
              />
            </svg>
          </motion.button>
          <motion.button whileTap={{scale: 1.2}} type='button' className='flex gap-1'  onClick={() => setRating(2)}>
            2
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fill-rule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                clip-rule='evenodd'
              />
            </svg>
          </motion.button>
          <motion.button whileTap={{scale: 1.2}} type='button' className='flex gap-1' onClick={() => setRating(3)}>
            3
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fill-rule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                clip-rule='evenodd'
              />
            </svg>
          </motion.button>
          <motion.button whileTap={{scale: 1.2}} type='button' className='flex gap-1' onClick={() => setRating(4)}>
            4
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fill-rule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                clip-rule='evenodd'
              />
            </svg>
          </motion.button>
          <motion.button whileTap={{scale: 1.2}} type='button' className='flex gap-1' onClick={() => setRating(5)}>
            5
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fill-rule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                clip-rule='evenodd'
              />
            </svg>
          </motion.button>
        </div>

        {/* ADD REVIEW MESSAGE */}
        <div>
          <textarea
            rows={4}
            placeholder='Review Message...'
            className='w-full border border-solid border-slate-900 rounded py-2 px-5 focus:outline-none'
            value={reviewMessage}
            onChange={handleReviewMessageChange}
            required
          />
        </div>

        <button
          type='submit'
          className='outline-none border-none py-2 px-5 rounded-md bg-gray-800 text-white cursor-pointer text-sm md:text-base mt-14 mb-5'
        >
          Submit
        </button>
      </form>
    </article>
  );
};

export default ReviewForm;
