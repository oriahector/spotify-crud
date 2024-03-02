import './App.css'
import { Magician } from './components/Wizard'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
import { type Student } from './types.d'
import confetti from 'canvas-confetti'

function App() {
  const [magicians, setMagicians] = useState<Student[]>([])
  const [section, setSection]= useState('Movies')
  const [sortAlphabetically, setSortAlphabetically] = useState(false)

  // const handleDelete = (index) => {
  //   console.log('delete', index)
  //   }

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/students')
      .then(response => response.json())
      .then(res => {
        setMagicians(res)
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

    console.log(magicians)

    const sortedMagicians = sortAlphabetically ? magicians.toSorted((a, b) => a.name.localeCompare(b.name)) : magicians

    const toggleSortAlphabetically = () => {
      setSortAlphabetically(!sortAlphabetically)
    }

    const deleteMagician = (id: string) => {
      const newMagicians = magicians.filter(magician => magician.id !== id)
      setMagicians(newMagicians)
      confetti()
    }

    const sections = [
      'Movies', 'Characters'
    ]

  return (
    <div className="App ">

       <h1 className="text-3xl font-bold underline text-white">
      Howgrats Students
    </h1>

      <button onClick={toggleSortAlphabetically}>{ sortAlphabetically ? 'Sort Alphabetically On' : 'Sort Alphabetically Off' }</button>

     <div className="flex rounded-md bg-neutral-75 ">
        {sections.map((item, index) => (
          <button key={index} onClick={() => setSection(item)} className={`relative h-8 rounded-md px-3 text-sm font-medium capitalize  text-deepblue-900  ${item === section ? 'bg-red-500' : 'bg-neutral-100'}`}
          >{item}</button>
        ))}

     </div>

     <div className="masonry-grid">
     {sortedMagicians.map((magician: Student) => (
      <Magician
      key={magician.id}
      handleDelete={() => deleteMagician(magician.id)}
      magician={magician}
    />
  ))}
</div>
<Footer></Footer>
      
    </div>
  )
}

export default App
