import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <div className='bg-white mt text-center pb-10'>
    <div className='w-60 mx-auto'>
       <Image alt = "Picture of a guy sitting watching movie" src={"/undraw_home_cinema_l7yl.png"} width={200} height={200}/> 
    </div>
    <h1 className='text-2xl text-gray-700 font-underline'></h1>
   </div>
  )
}

export default Hero