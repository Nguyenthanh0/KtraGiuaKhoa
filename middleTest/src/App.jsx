import { useState } from 'react'
import Narbar from './components/Tabbar/Narbar'
import './App.css'
import Main from './components/Main/Main'
import anh1 from './assets/spy_carousel 1.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Narbar></Narbar>
      <Main img={anh1}></Main>
    </div>
      
    </>
  )
}

export default App
