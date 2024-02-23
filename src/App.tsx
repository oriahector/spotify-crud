import './App.css'
import { SongsList } from './components/SongsList'
import { useEffect, useState } from 'react'

function App() {
  const [songs, setSongs] = useState([])

  const API_KEY = '9fb0033e70mshd11522b742baeacp110b03jsn9329f35607dd'
  const API_HOST = 'spotify23.p.rapidapi.com'

  useEffect(() => {
    fetch('https://spotify23.p.rapidapi.com/search/?q=arcade fire&type=multi&offset=0&limit=10&numberOfTopResults=5', {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      },
    })
      .then(response => response.json())
      .then(res => {
        setSongs(res)
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

  return (
    <div className="App">
      <h1>Hello Vite + React!</h1>
      <p>Aqui van los albumes</p>
      <div className="albumes">
       <SongsList songs={songs}></SongsList>
      </div>
      
    </div>
  )
}

export default App
