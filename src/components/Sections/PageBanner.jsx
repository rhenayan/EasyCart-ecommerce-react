
import React from 'react'
const PageBanner = ({title}) => {
  return (
    <section className="w-full bg-page-banner  bg-no-repeat bg-top bg-cover text-center flex items-center justify-center py-16  md:py-20 lg:py-24">
        <h1 className='text-white font-semibold text-2xl lg:text-3xl'>{title}</h1>
    </section>
  )
}

export default PageBanner