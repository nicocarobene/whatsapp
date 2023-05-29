import perfil from '../assets/perfil.jpg'
import { useState } from 'react'
import { Nav, NewMessage } from './icons'

export default function Navbar () {
  const [navbar, setNav] = useState(false)
  return (
    <header className='bg-gray-100 py-3 px-4 relative'>
        <nav className='flex justify-between text-center'>
            <picture>
                <img className='w-10 rounded-full' src={perfil}/>
            </picture>
            <div className='flex gap-8 relative pr-4'>
              <button className='active:bg-gray-400' onClick={() => { setNav(!navbar) }}><NewMessage/></button>
              <button onClick={() => { setNav(!navbar) }}><Nav/></button>
            </div>
        </nav>
        { navbar && <span>
            <div className='absolute top-14 right-10 [&>ul>li]:py-3 [&>ul>li]:px-6 [&>ul>li]:text-sm [&>ul>li]:text-gray-700 [&>ul>li]:font-normal rounded-md bg-white w-52 shadow-md shadow-gray-400'>
                <ul className='flex flex-col gap-3 mt-1 '>
                    <li className='hover:bg-gray-100'>
                        <div>Nuevo grupo</div>
                    </li>
                    <li className='hover:bg-gray-100'>
                        <div>Perfil</div>
                    </li>
                    <li className='hover:bg-gray-100'>
                        <div>Mensajes destacados</div>
                    </li>
                    <li className='hover:bg-gray-100'>
                        <div>Etiquetas</div>
                    </li>
                    <li className='hover:bg-gray-100'>
                        <div>Configuración</div>
                    </li>
                    <li className='hover:bg-gray-100'>
                        <div>Cerrar sesión</div>
                    </li>
                </ul>
            </div>
            </span>}
    </header>
  )
}
