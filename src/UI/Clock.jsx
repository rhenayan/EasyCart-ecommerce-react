import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //Countdown logic

  let interval;

  const countDown = () => {

    //get the end date
    const destination = new Date('Feb 28, 2023').getTime();
    interval = setInterval(() => {

      const now = new Date().getTime();
      const difference = destination - now;

      //calculate remaining days
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)); 

       //calculate remaining hours
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

       //calculate remaining minutes
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      // //calculate remaining  seconds
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);


      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown()
  },[days, hours, minutes,seconds])

  return (
    <div className='flex items-center justify-center gap-3 md:gap-10 lg:gap-3 mb-8 mt-4'>
      <div className='flex items-center gap-3 md:gap-4 lg:gap-3'>
        <div className='text-center'>
          <h1 className=' text-2xl md:text-3xl mb-1 '>{days}</h1>
          <h5 className=' text-sm md:text-base'>Days</h5>
        </div>
        <span className=' text-xl'>:</span>
      </div>

      <div className='flex items-center gap-3 md:gap-4  lg:gap-3'>
        <div className='text-center'>
          <h1 className=' text-2xl md:text-3xl  mb-1'>{hours}</h1>
          <h5 className=' text-sm md:text-base'>Hours</h5>
        </div>
        <span className=' text-xl'>:</span>
      </div>

      <div className='flex items-center gap-3 md:gap-4  lg:gap-3'>
        <div className='text-center'>
          <h1 className=' text-2xl md:text-3xl  mb-1'>{minutes}</h1>
          <h5 className=' text-sm md:text-base'>Minutes</h5>
        </div>
        <span className=' text-xl'>:</span>
      </div>
      <div className='flex items-center'>
        <div className='text-center'>
          <h1 className=' text-2xl md:text-3xl  mb-1'>{seconds}</h1>
          <h5 className=' text-sm md:text-base'>Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
