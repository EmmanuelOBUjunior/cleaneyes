import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <>
    <div>{movie.title}</div>
    <div>{movie.id}</div>
    </>
  )
}

export default MovieCard