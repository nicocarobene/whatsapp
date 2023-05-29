import { useRef, useState } from 'react'
import { Filter, Search, SearchHover } from './icons'

export default function Searching () {
  const [value, setValue] = useState('')
  const inputref = useRef<HTMLInputElement>(null)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {}
  return (
    <div className='py-2 px-4 flex border-b-[1px]'>
        <div className=' px-3 flex gap-6 bg-gray-100 rounded-lg text-center w-full mr-2'>
            <button className='transition ease-in-out delay-150' onClick={handleClick}>
              {
                value === ''
                  ? <Search/>
                  : <SearchHover/>
              }
            </button>
            <input ref={inputref} onChange={handleInput} placeholder='Busca un chat o inicia uno nuevo' className='outline-none py-2 w-full placeholder:text-gray-500 placeholder:text-sm bg-gray-100'/>
        </div>
        <button>
            <Filter/>
        </button>
    </div>
  )
}
