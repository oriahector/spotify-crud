import './App.css'
import { SongsList } from './components/SongsList'
import { useEffect, useState } from 'react'

function App() {
  const [albums, setSongs] = useState([])
  const [sortByYear, setSortByYear] = useState(false)

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
        setSongs(res.albums.items)
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

    const sortedAlbums = albums.sort((a, b) => {
      if (sortByYear) {
        return a.data.date.year - b.data.date.year
      } else {
        return b.data.date.year - a.data.date.year
      }
    }
    )


    const toggleSortByYear = () => {
      setSortByYear(!sortByYear)
    }


    console.log(albums)
    console.log(albums[0])


  return (
    <div className="App">
      <h1>Hello Vite + React!</h1>

      <button onClick={toggleSortByYear}>{ sortByYear ? 'Sort by oldest' : 'Sort by newest' }</button>

      <div className="albumes">
       { sortedAlbums.map((album, index) => (
          <SongsList key={index} album={album.data} />
        ))}
      b</div>
      
    </div>
  )
}

export default App
