import Hero from "@/components/Hero"
import PopularMovies from "@/components/PopularMovies"

export default function Home() {
  return (
    <section>
    <Hero/>
    <PopularMovies/>
    </section>
  )
}

// https://api.themoviedb.org/3/movie/550?api_key=770394810aba91efa65fbbc53aa4de60

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
