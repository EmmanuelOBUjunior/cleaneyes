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
      <h1 className='font-bold text-xl'>{detail.title}</h1>
      </div>
    </div>
  )
}

export default MovieDetails