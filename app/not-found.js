'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('./')
        }, 5000)

        return () => clearTimeout(timer)
    })

  return (
    <div>The page you are looking for cannot be found. We will redirect you to the homepage in 5 seconds</div>
  )
}

export default NotFound