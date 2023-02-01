import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';


const MobileMenu = ({paths}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='lg:hidden'>
        <button
          className='px-2 focus:outline-none'
          onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className='bg-slate-800 h-screen w-4/5 absolute z-10 right-0 top-0 flex justify-center pt-10 text-xl lg:hidden p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 text-white absolute top-5 left-5 cursor-pointer'
            onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
          >
            <path
              fill-rule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clip-rule='evenodd'
            />
          </svg>

          <ul className='text-white'>
            {paths.map((path, i) => (
              <li
                className=' my-7'
                key={i}
                onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
              >
                <NavLink
                  to={path.path}
                  className={({ isActive }) => (isActive ? 'font-bold' : null)}
                >
                  {path.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}{' '}
    </>
  );
};

export default MobileMenu;
