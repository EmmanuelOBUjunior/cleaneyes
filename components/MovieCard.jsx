import Link from 'next/link'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
   <Link href = {`/movies/${movie.id}`}>
   
   </Link>
  )
}

export default MovieCard