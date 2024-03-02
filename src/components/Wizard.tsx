import { type Student } from '../types'
//importar defaultWizard.svg como defaultImage
import defaultImage from '../assets/defaultWizard.svg'

interface MagicianProps {
  magician: Student
  handleDelete: () => void
}



export function Magician({magician, handleDelete} : MagicianProps) {


  const gradient = magician.house === 'Gryffindor' ? 'gryffindor-gradient' : magician.house === 'Hufflepuff' ? 'hufflepuff-gradient' : magician.house === 'Ravenclaw' ? 'ravenclaw-gradient' : 'slytherin-gradient'

  
  return (
<div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
<div className={`relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover ${gradient}`}>

    <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[2px] border-white bg-pink-400">
        <img className="h-full w-full rounded-full object-cover object-top" src={magician.image ? magician.image : defaultImage}alt={magician.name} />
    </div>
  </div>
  <div className="mt-16 flex flex-col items-center">
    <h4 className="text-bluePrimary text-xl font-bold">{magician.name}</h4>
    <p className="text-lightSecondary text-base font-normal">{magician.house}</p>
  </div>
  <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-bluePrimary text-2xl font-bold">17</h3>
      <p className="text-lightSecondary text-sm font-normal">Posts</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-bluePrimary text-2xl font-bold">9.7K</h3>
      <p className="text-lightSecondary text-sm font-normal">Followers</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-bluePrimary text-2xl font-bold">434</h3>
      <p className="text-lightSecondary text-sm font-normal">Following</p>
    </div>
  </div>
  <button className='text-red-500' onClick={handleDelete}>Delete</button>
</div>
  )
}
