import { useState } from 'react'
import Narbar from './components/Tabbar/Narbar'
import './App.css'
import Main from './components/Main/Main'
import anh1 from './assets/spy_carousel 1.png'
import Footer from './components/Footer/Footer'
import { data } from './Data'
import Card from './components/Card/Card'


function App() {
  const [movies, setMovies] = useState([...data]
)
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
    <div className='container'>
      <Narbar></Narbar>
      <Card img={anh1}></Card>
      <Main movie={selectedMovie} />
      <Footer movies={movies} onMovieSelect={handleMovieSelect} />
    </div>
      
    </>
  )
}

export default App
