import { useEffect } from "react"
const PopularMovies = () => {
    useEffect(() =>{
        const getMovies = async () =>{
            const query = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
        }
    },[])
  return (
    <div>PopularMovies</div>
  )
}

export default PopularMovies