'use client'
import {useEffect, useState} from 'react'
import { useParams } from 'next/navigation'

const MovieDetails = () => {
  const [details, getDetails] = useState()
  const params = useParams()

  useEffect(() =>{
    const detailsFetch = async () =>{
      console.log(params);
      const fetchdetail = await fetch(`https://api.themoviedb.org/3/movie/678512?language=en-US&api_key=770394810aba91efa65fbbc53aa4de60`)
      const response = await fetchdetail.json()
      console.log(response.original_title)
    }

    detailsFetch();
  })
  return (
    <div>Movie Details</div>
  )
}

export default MovieDetails