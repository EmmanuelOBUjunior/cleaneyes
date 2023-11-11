import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <div className='bg-white mt text-center pb-10'>
    <div>
       <Image alt = "P" src={"/public/undraw_home_cinema_l7yl.svg"} width={200} height={200}/> 
    </div>

   </div>
  )
}

export default Hero