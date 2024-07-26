import React from 'react'
import './Footer.css'

function Footer({ movies, onMovieSelect }) {
  
  return (
    <div className="footer">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
          onClick={() => onMovieSelect(movie)}
        >
          <img src={movie.image} alt={movie.movieName} />
          <h3>{movie.movieName}</h3>
        </div>
      ))}
    </div>
  )
}

export default Footer