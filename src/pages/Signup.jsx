import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import Container from '../UI/Container';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  return (
    <Helmet title='Signup'>
      <Container>
        <section className='  md:w-4/5 lg:w-2/5 mx-auto text-center mt-8'>
          <h3 className=' font-bold text-2xl mb-5'>Signup</h3>
          <form className=' bg-slate-800 p-10 rounded'>
            <input
              className='w-full border-gray-400 my-2 p-2 rounded-lg font-semibold placeholder:font-normal'
              type='text'
              placeholder='Username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className='w-full border-gray-400 my-2 p-2 rounded-lg font-semibold placeholder:font-normal'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className='w-full border-gray-400 mt-2 p-2 rounded-lg placeholder:font-normal'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              className='mt-5 flex text-white cursor-pointer '
              type='file'
              value={file}
              onChange={e => setFile(e.target.files[0])}
            />

            <button className='mt-10 bg-slate-50 text-slate-800 outline-none border-none py-2 px-7 rounded-md cursor-pointer text-sm font-semibold md:text-base'>
              {' '}
              Create an account
            </button>
            <h6 className='text-slate-500 mt-6 text-sm'>
              Already have an account?{' '}
              <Link to='/login' className='text-slate-400 text-base'>
                Login
              </Link>
            </h6>
          </form>
        </section>
      </Container>
    </Helmet>
  );
};

export default Signup;
