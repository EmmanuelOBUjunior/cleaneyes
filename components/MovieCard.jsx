import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
   <Link href = {`/movies/${movie.id}`}>
    <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={700} height={800} alt = {`${movie.title} poster`} className='rounded-t-md'/>
    <div className='px-6 py-2'>
        <div className="font-bold text-xl mb-1">
            {movie.title}
        </div>
        <p className="text-gray-700 mb-1">{movie.release_date}</p>
    </div>
   </Link>
  )
}

export default MovieCard