import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <div className='bg-white mt text-center pb-10'>
    <div className='w-60 mx-auto'>
       <Image alt = "Picture of a guy sitting watching movie" src={"/undraw_home_cinema_l7yl.png"} width={200} height={200}/> 
    </div>
    <h1 className='text-3xl text-gray-700 uppercase font-bold'>Welcome to Clean Eyes👌</h1>
    <p className='text-gray-700'>Find our thrilling and exciting featured movies here. Trust me you will love it❤️</p>
    <button className='bg-gray-700 text-white '>Contact Us</button>
   </div>
  )
}

export default Hero