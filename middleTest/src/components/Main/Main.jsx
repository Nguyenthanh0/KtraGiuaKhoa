import React from 'react'
import './Main.css'


const Main = ({ img, movie }) => {
  return (
    <div className="main">
      
      {movie && (
        <div className="movie-details">
          <img src={movie.image} alt={movie.movieName} className="movie-image" />
          <h2>{movie.movieName}</h2>
          <p>{movie.description}</p>
        </div>
      )}
    </div>
  );
};

export default Main