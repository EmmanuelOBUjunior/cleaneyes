'use client'
import {useEffect, useState} from 'react';


const MY_API_KEY = process.env.API_KEY.toString()

const PopularMovies = () => {
    const [movies, setMovies] = useState()

    useEffect(() =>{
        const getMovies = async () => {
            const fetchMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${MY_API_KEY}`);
            const movieresponse = await fetchMovies.json();
            console.log(movieresponse.results)
            
            setMovies(movieresponse.results)
        }

        getMovies()
    },[])
  return (
    <>
        <div className='text-center text-4xl font-neue'>Popular Movies Here</div>
        {
            movies && movies.length && movies.map((movie) =>{
                return(
                    <>
                    <h3>{movie.title}</h3>
                    </>
                )
            })
        }
    </>
  )
}

export default PopularMovies