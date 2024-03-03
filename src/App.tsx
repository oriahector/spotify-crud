import './App.css'
import { Magician } from './components/Wizard'
import { Footer } from './components/Footer'
import { useEffect, useState, useRef, useMemo } from 'react'
import { type Student } from './types.d'
import confetti from 'canvas-confetti'

function App() {
  const [magicians, setWizard] = useState<Student[]>([])
  const [section, setSection]= useState('Movies')
  const [sortAlphabetically, setSortAlphabetically] = useState(false)
  const [filterName, setFilterName] = useState<string | null>(null)

  const originalWizards = useRef<Student[]>([])

  // const handleDelete = (index) => {
  //   console.log('delete', index)
  //   }

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/students')
      .then(response => response.json())
      .then(res => {
        setWizard(res)
        originalWizards.current = res
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

    console.log(magicians)

    const filteredMagicians = filterName != null && filterName.length > 0 ? magicians.filter(magician => magician.name.toLowerCase().includes(filterName.toLowerCase())) : magicians


    const sortedMagicians = useMemo(() => {
      return sortAlphabetically
        ? filteredMagicians.sort((a, b) => a.name.localeCompare(b.name))
        : filteredMagicians
    }
    , [sortAlphabetically, filteredMagicians])

    const toggleSortAlphabetically = () => {
      setSortAlphabetically(!sortAlphabetically)
    }

    const deleteWizard = (id: string) => {
      const newMagicians = magicians.filter(magician => magician.id !== id)
      setWizard(newMagicians)
      confetti()
    }

    const handleReset = () => {
      setWizard(originalWizards.current)
    }

  return (
    <div className="App h-full flex flex-col">

    <h1 className="text-3xl font-bold my-5 text-white m-auto">
      Howgrats Students
    </h1>

    <div className="flex m-auto my-5">
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded" onClick={toggleSortAlphabetically}>{ sortAlphabetically ? 'Sort Alphabetically On' : 'Sort Alphabetically Off' }</button>
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded mx-2" onClick={handleReset}>Reset</button>
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded mx-2">Add Magician</button>
      <input type="text" placeholder="Search by wizard name" className="rounded-md px-3 text-sm font-medium capitalize text-deepblue-900 bg-neutral-100" 
      onChange={(e) => setFilterName(e.target.value)}
      />
    </div>

<>
 {sortedMagicians.length > 0 ? (
    <div className="masonry-grid">
      {sortedMagicians.map((magician: Student) => (
        <Magician
          key={magician.id}
          handleDelete={() => deleteWizard(magician.id)}
          magician={magician}
        />
      ))}
    </div>
 ) : (
  <div className="flex flex-col m-auto my-5">
       <p> There are no magicians to show</p>
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded">Add Magician</button>
    </div>
 )}
</>
<Footer></Footer>
      
    </div>
  )
}

export default App
