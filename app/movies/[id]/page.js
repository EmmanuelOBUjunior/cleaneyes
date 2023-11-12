'use client'
import {useEffect, useState} from 'react'

const MovieDetails = () => {
  const [details, getDetails] = useState()

  useEffect(() =>{
    const detailsFetch = async () =>{
      const fetchdetail = await fetch()
    }
  },[])
  return (
    <div>Movie Details</div>
  )
}

export default MovieDetails