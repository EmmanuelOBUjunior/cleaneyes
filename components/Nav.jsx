import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='bg-gray-700'>
        <div className='p-4 font-bold text-neutral-100 tracking-widest max-w-7xl mx-auto container'>
            <Link href= "/">
                <h1 className='text-base md:text-2xl'>Clean
                    <span className='text-red-'>Eyes</span>
                </h1>
            </Link>
        </div>
    </div>
  )
}

export default Nav