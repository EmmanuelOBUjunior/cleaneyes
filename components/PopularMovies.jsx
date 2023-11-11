
const PopularMovies = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzAzOTQ4MTBhYmE5MWVmYTY1ZmJiYzUzYWE0ZGU2MCIsInN1YiI6IjY1NGY3NTE3Mjg2NmZhMTA4YzA1MmE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rxk_3Zz_9NYzpGElTBeh8JizktBNmnXQUlXNqlwREhU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        
  return (
    <>

    </>
  )
}

export default PopularMovies