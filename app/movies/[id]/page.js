'use client'
import {useEffect, useState} from 'react'

const MovieDetails = () => {
  const [details, getDetails] = useState()

  useEffect(() =>{
    const detailsFetch = async () =>{
      const fetchdetail = await fetch(`https://api.themoviedb.org/3/movie/678512?language=en-US&api_key=770394810aba91efa65fbbc53aa4de60`)
    }
  },[])
  return (
    <div>Movie Details</div>
  )
}

export default MovieDetails