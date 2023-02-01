import React from 'react';
import {motion} from 'framer-motion';
import services from '../../data/services';

const Services = () => {
  return (
    <section className='w-full px-2 md:px-8 lg:px-16 mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3 '>
      {services.map((service, i) => (
        <motion.div whileHover = {{scale: 1.1}}
          className={`${service?.bgColor} p-3 flex items-center gap-2  rounded-md cursor-pointer`}
         key={i}>
          <span className='bg-gray-800 rounded-full p-2 text-white '>
            {service.icon}
          </span>
          <div>
            <h3 className='text-base font-bold'>{service.title}</h3>
            <p className='text-sm text-slate-600'>{service.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
