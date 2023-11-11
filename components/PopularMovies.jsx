'use client'
import {useEffect, useState} from 'react';

const PopularMovies = () => {
    const [movies, setMovies] = useState()

    useEffect(() =>{
        const getMovies = async () => {
            const fetchMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=770394810aba91efa65fbbc53aa4de60');
            const movieresponse = await fetchMovies.json();
            
            setMovies(movieresponse)
        }

        getMovies()
    },[])
  return (
    <>
        <div>Popular Movies Here</div>
    </>
  )
}

export default PopularMovies