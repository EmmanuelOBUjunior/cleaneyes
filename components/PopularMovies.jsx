'use client'

import { useEffect, useState } from "react"

const PopularMovies = () => {
    const [movies, setMovies] = useState();

    useEffect(() =>{
        const getMovies = async () =>{
            const query = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
            const response = await query.json();

            setMovies(response)
            console.log(response)
        }

        getMovies()
    },[])
  return (
    <>
    {movies && movies.length && movies.map((movie) =>{
        return (
            <>
            <div>{movie.title}</div>
            </>
        )
    })
    
    }
    </>
  )
}

export default PopularMovies