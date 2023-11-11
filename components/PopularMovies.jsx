'use client'

import { useEffect } from "react"
const PopularMovies = () => {


    useEffect(() =>{
        const getMovies = async () =>{
            const query = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
            const response = await query.json();

            console.log(response)
        }

        getMovies()
    },[])
  return (
    {}
  )
}

export default PopularMovies