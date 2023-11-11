import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
   <Link href = {`/movies/${movie.id}`}>
    <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={700} height={800} alt = {`${movie.title} poster`}/>
   
   </Link>
  )
}

export default MovieCard