import { type Student } from '../types'
//importar defaultWizard.svg como defaultImage
import defaultImage from '../assets/defaultWizard.svg'

interface MagicianProps {
  magician: Student
  handleDelete: () => void
}

export function Magician({ magician, handleDelete }: MagicianProps) {
  const gradient =
    magician.house === 'Gryffindor'
      ? 'gryffindor-gradient'
      : magician.house === 'Hufflepuff'
      ? 'hufflepuff-gradient'
      : magician.house === 'Ravenclaw'
      ? 'ravenclaw-gradient'
      : 'slytherin-gradient'

  
  return (
    <div className="bg-gray-900 shadow-3xl rounded-lg relative mx-auto group flex h-full w-full flex-col items-center  bg-cover bg-clip-border  dark:text-white dark:shadow-none">
      <div
        className={`relative flex h-32 w-full justify-center rounded-t-lg bg-cover ${gradient}`}
      >
        <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[2px] border-white bg-teal-950">
          <img
            className="h-full w-full rounded-full object-cover object-top"
            src={magician.image ? magician.image : defaultImage}
            alt={magician.name}
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-blue-500 dark:text-white text-xl font-bold">
          {magician.name}
        </h4>
        <p className="text-slate-500 text-base font-normal">
          {magician.house}
        </p>
      </div>
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-blue-500 text-2xl font-bold">{magician.species}</h3>
          <p className="text-blue-900 text-sm font-normal">Specie</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-blue-500 text-2xl font-bold">{magician.dateOfBirth ? magician.dateOfBirth.slice(-4) : 'unknown'} </h3>
          <p className="text-blue-900 text-sm font-normal">Year of birth</p>
        </div>
      </div>
      <div className="flex">
      <button type="button" className="invisible group-hover:visible focus:outline-none text-white bg-teal-900 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-teal-700 dark:focus:ring-green-800">See more</button>
      <button
        type="button"
        onClick={handleDelete}
        className="invisible group-hover:visible focus:outline-none text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      > 
        Delete
      </button>
      </div>
    </div>
  )
}
