import Hero from "@/components/Hero"
import PopularMovies from "@/components/PopularMovies"

export default function Home() {
  return (
    <section>
    <div className='bg-white mt text-center pb-10'>
    <div className='w-60 mx-auto'>
       <Image alt = "Picture of a guy sitting watching movie" src={"/undraw_home_cinema_l7yl.png"} width={200} height={200}/> 
    </div>
    <h1 className='text-3xl text-gray-700 uppercase font-bold font-neue'>Welcome to Clean Eyes👌</h1>
    <p className='text-gray-700'>Find our thrilling and exciting featured movies here. Trust me you will love it❤️</p>
    <Link href="/contact">
    <button className='bg-gray-700 text-white py-3 px-6 text-sm mt-4 rounded hover:bg-gray-500'>Contact Us</button>
    </Link>
   </div>
    <PopularMovies/>
    </section>
  )
}

// https://api.themoviedb.org/3/movie/550?api_key=770394810aba91efa65fbbc53aa4de60

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
