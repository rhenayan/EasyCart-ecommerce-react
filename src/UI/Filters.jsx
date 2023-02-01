import React, { useRef } from 'react';

const Filters = ({ onCategory, onSearch }) => {
  const categoryRef = useRef(null);
  const searchRef = useRef('');

  const handleCategory = () => {
    onCategory(categoryRef.current.value);
  };

  const handleSearch = () => {
    onSearch(searchRef.current.value);
  };

  return (
    <section className=' grid grid-cols-12 items-center lg:grid-cols-3 px-2 md:px-8 lg:px-16  mt-11 mb-5'>


      {/* FILTER BY CATEGORY  */}


      <div className='col-start-1 col-end-5 lg:col-auto'>
        <select
          className=' px-2 text-sm lg:text-base md:px-3 py-1 border-[1px] border-solid border-gray-800 cursor-pointer rounded bg-slate-800 text-white focus:outline-0 appearance-none'
          onChange={handleCategory}
          ref={categoryRef}
        >
          <option className='text-sm' value=''>
            {' '}
            Filter By Category{' '}
          </option>
          <option className='text-sm' value='jewelery'>
            Jewelery
          </option>
          <option className='text-sm' value='electronics'>
            Electronics
          </option>
          <option className='text-sm' value="men's clothing">
            Men's Clothing
          </option>
          <option className='text-sm' value="women's clothing">
            Women's Clothing
          </option>
        </select>
      </div>


      {/* ASCENDING / DESCENDING */}

      <div className='col-start-8 col-end-13 text-end lg:text-start lg:col-auto'>
        <select className=' px-2  text-sm lg:text-base  md:px-3  py-1 border-[1px]  border-solid border-gray-800 cursor-pointer rounded bg-slate-800 text-white focus:outline-0 appearance-none'>
          <option className='text-sm'> Sort By </option>
          <option className='text-sm' value='ascending'>
            Ascending
          </option>
          <option className='text-sm' value='descending'>
            Descending
          </option>
        </select>
      </div>



      {/* SEARCH BAR */}



      <div className='flex items-center justify-between col-span-full lg:col-auto w-full border-[1px]  border-solid border-gray-800 rounded pr-3 pl-[2px] cursor-pointer mt-3 lg:mt-0'>
        <input
          type='text'
          placeholder='Search.....'
          className='w-full border-none outline-none px-2 md:px-3 py-1 text-base'
          onChange={handleSearch}
          ref={searchRef}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-5 h-5 text-slate-800'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
    </section>
  );
};

export default Filters;
