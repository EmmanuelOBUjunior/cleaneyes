'use client'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('./')
        }, 5000)
    },[])

  return (
    <div>The page you are looking for cannot be found</div>
  )
}

export default NotFound