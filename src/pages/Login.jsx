import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import Container from '../UI/Container'
import { Link } from 'react-router-dom';

const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Helmet title='Login'>
      <Container>
        <section className= ' md:w-4/5 lg:w-2/5 mx-auto text-center h-[50vh] mt-8'>
          <h3 className=' font-bold text-2xl mb-5'>Login</h3>
          <form className=' bg-slate-800 p-10 rounded'>
              <input className='w-full border-gray-400 my-2 p-2 rounded-lg font-semibold placeholder:font-normal' type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input className='w-full border-gray-400 mt-2 p-2 rounded-lg placeholder:font-normal' type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />

              <button className='mt-10 bg-slate-50 text-slate-800 outline-none border-none py-2 px-7 rounded-md cursor-pointer text-sm font-semibold md:text-base'> Login</button>
              <h6 className='text-slate-500 mt-6 text-sm'>Don't have an account? <Link to='/signup' className='text-slate-400 text-base'>Create an account</Link></h6>
          </form>
        </section>
      </Container>
    </Helmet>
  );
};

export default Login;
