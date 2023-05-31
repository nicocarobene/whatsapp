import { useRef, useState } from 'react'
import { Filter, Search, SearchHover } from '../icons/icons'
export default function Searching () {
  const [value, setValue] = useState(false)
  const inputref = useRef<HTMLInputElement>(null)

  inputref?.current?.addEventListener('focus', () => { console.log('hola') })
  const handleInputTrue = () => { setValue(true) }
  const handleInput = () => {
    setValue(false)
  }
  return (
    <div className='py-2 px-4 flex border-b-[1px]'>
        <div className=' px-3 flex gap-6 bg-gray-100 rounded-lg text-center w-full mr-2'>
            <input ref={inputref} onBlur={handleInput} onFocus={handleInputTrue} placeholder='Busca un chat o inicia uno nuevo' className='order-2 outline-none py-2 w-full placeholder:text-gray-500 placeholder:text-sm bg-gray-100 peer'/>
            <button className='order-1 relative transition-transform duration-500 rotate-0 searchicon peer-focus:-rotate-180' >
              {
                value
                  ? <SearchHover/>
                  : <Search />
              }
            </button>
        </div>
        <button>
            <Filter/>
        </button>
    </div>
  )
}
