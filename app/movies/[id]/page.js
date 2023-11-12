'use client'
import {useEffect, useState} from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const MovieDetails = () => {
  const [detail, getDetails] = useState({})
  const params = useParams()

  useEffect(() =>{
    const detailsFetch = async () =>{
      const fetchdetail = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=770394810aba91efa65fbbc53aa4de60`)
      const response = await fetchdetail.json()
      console.log(response)
      getDetails(response)
    }

    detailsFetch();
  },[params.id])
  return (
    <div className='container mx-auto pt-6 max-w-4xl'>
      <div className='px-3'>
      <Image src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} width={1000} height={600} alt={`${detail.original_title} poster picture`}/>
      <h1 className='font-bold text-xl my-2'>{detail.title}</h1>
      <p className='text-gray-600 text-sm mt-4'>{detail.overview}</p>
      <p className='text-gray-600 text-sm mt-5'>Genres: <span className=''>{detail.genres.map(genre => genre.name).join(", ")}</span></p>
      <p className='text-gray-600 text-sm'>Release Date: <span className='font-bold'>{detail.release_date}</span></p>
      </div>
    </div>
  )
}

export default MovieDetails