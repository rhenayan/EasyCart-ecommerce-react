import React from 'react'

const Container = ({children}) => {
  return (
    <section className='px-2 md:px-8 lg:px-16'>{children}</section>
  )
}

export default Container