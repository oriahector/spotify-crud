import './App.css'
import { Wizard } from './components/Wizard'
import { Footer } from './components/Footer'
import { useEffect, useState, useRef, useMemo } from 'react'
import { type Student } from './types.d'
import confetti from 'canvas-confetti'

function App() {
  const [wizards, setWizard] = useState<Student[]>([])
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

    console.log(wizards)

    const filteredWizards = useMemo(() => {
      return filterName != null && filterName.length > 0 
      ? wizards.filter(wizard => {
        return wizard.name.toLowerCase().includes(filterName.toLowerCase())
      })
        : wizards
    }
    , [wizards, filterName])


    const sortedWizards = useMemo(() => {
      return sortAlphabetically
        ? filteredWizards.toSorted((a, b) => a.name.localeCompare(b.name))
        : filteredWizards
    }
    , [sortAlphabetically, filteredWizards])

    const toggleSortAlphabetically = () => {
      setSortAlphabetically(!sortAlphabetically)
    }

    const deleteWizard = (id: string) => {
      const newWizards = wizards.filter(wizard => wizard.id !== id)
      setWizard(newWizards)
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
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded">Add Wizard</button>
      <input type="text" placeholder="Search by wizard name" className="rounded-md px-3 text-sm font-medium capitalize text-deepblue-900 bg-neutral-100 ml-4" 
      onChange={(e) => setFilterName(e.target.value)}
      />
    </div>

<>
 {sortedWizards.length > 0 ? (
    <div className="masonry-grid">
      {sortedWizards.map((wizard: Student) => (
        <Wizard
          key={wizard.id}
          handleDelete={() => deleteWizard(wizard.id)}
          wizard={wizard}
        />
      ))}
    </div>
 ) : (
  <div className="flex flex-col m-auto my-5">
       <p> There are no Wizards to show</p>
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded">Add wizardn</button>
    </div>
 )}
</>
<Footer></Footer>
      
    </div>
  )
}

export default App
