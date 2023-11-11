import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='bg-gray-700'>
        <div>
            <Link href= "/">
                <h1>Clean
                    <span>Eyes</span>
                </h1>
            </Link>
        </div>
    </div>
  )
}

export default Nav