'use client'
import {useEffect, useState} from 'react'
import { useParams } from 'next/navigation'

const MovieDetails = () => {
  const [details, getDetails] = useState()
  const params = useParams()

  useEffect(() =>{
    const detailsFetch = async () =>{
      const fetchdetail = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=770394810aba91efa65fbbc53aa4de60`)
      const response = await fetchdetail.json()
      getDetails(response)
    }

    detailsFetch();
  })
  return (
    <div>Movie Details</div>
  )
}

export default MovieDetails