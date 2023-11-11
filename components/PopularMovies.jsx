'use client'
import {useEffect, useState} from 'react';



const PopularMovies = () => {
    const [movies, setMovies] = useState([])
   
    useEffect(() =>{
        const getMovies = async () => {
            const fetchMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=770394810aba91efa65fbbc53aa4de60`);
            const movieresponse = await fetchMovies.json();
            console.log(movieresponse.results)
            
            setMovies(movieresponse.results)
        }

        getMovies()
    },[])
  return (
    <>
        <div className='font-neue container bg-gray-700 max-w-7xl m-auto pb-10 px-4'>
            <h1 className='text-center text-2xl mt-8 mb-5 text-white'>What is Popular</h1>
        {
            movies && movies.length && movies.map((movie) =>{
                return(
                    <>
                    <h3>{movie.original_title}</h3>
                    </>
                )
            })
        }
        </div>
    </>
  )
}

export default PopularMovies