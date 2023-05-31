import { Emoji, Files, Microfone } from '../../icons/icons'
import { useState } from 'react'
import { AddFiles } from './AddFiles'

export const BarInputUser = () => {
  const [visibiliti, setVisibiliti] = useState(false)
  console.log(visibiliti)
  return (
        <div className='flex bg-slate-100 py-3'>
          <div className='flex gap-4 mx-4'>
            <button className='m-2'>
                <Emoji/>
            </button>
            <button className='relative' onClick={() => { setVisibiliti(!visibiliti) }}>
                <Files/>
                <AddFiles styles={{ display: visibiliti ? 'block' : 'none' }} className='absolute flex-col-reverse -top-60 -right-4'/>
            </button>
          </div>
          <input className='rounded-lg px-4 py-2 w-full placeholder:text-gray-500/90' placeholder='Escribe un mensaje aquí'/>
        <button className='mx-4'>
            <Microfone/>
        </button>
    </div>
  )
}
