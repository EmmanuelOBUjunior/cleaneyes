import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
   <Link href = {`/movies/${movie.id}`}>
    <Image/>
   
   </Link>
  )
}

export default MovieCard