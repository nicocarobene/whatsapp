import perfil from '../assets/perfil.jpg'
import { useState } from 'react'
import { Nav, NewMessage } from './icons/icons'
import { Menu } from './MenuResponsive.tsx/Menu'

export default function Navbar () {
  const [navbar, setNav] = useState(true)
  return (
    <header className="bg-gray-100 py-3 px-4 relative">
      <nav className="flex justify-between text-center">
        <picture>
          <img className="w-10 rounded-full" src={perfil} />
        </picture>
        <div className="flex gap-2 relative pr-4">
          <button
            className="active:bg-gray-400"
            onClick={() => {
              setNav(!navbar)
            }}
          >
            <NewMessage />
          </button>
          <button className='active:bg-gray-300 rounded-full p-2'
            onClick={() => {
              setNav(!navbar)
            }}
            onBlur={() => {
              if (!navbar) { setNav(!navbar) }
            }}
          >
            <Nav />
          </button>
        </div>
      </nav>
      <Menu navbar={navbar} right='right-10' top='top-14'>
        <li className="hover:bg-gray-100">
          <div role='button' aria-label='Nuevo'>Nuevo grupo</div>
        </li>
        <li className="hover:bg-gray-100">
          <div role='button' aria-label='Perfil'>Perfil</div>
        </li>
        <li className="hover:bg-gray-100">
          <div role='button' aria-label='Mensajes destacados'>Mensajes destacados</div>
        </li>
        <li className="hover:bg-gray-100">
          <div role='button' aria-label='Etiquetas'>Etiquetas</div>
        </li>
        <li className="hover:bg-gray-100">
          <div role='button' aria-label='Configuración'>Configuración</div>
        </li>
        <li className="hover:bg-gray-100">
          <div role='button' aria-label='Cerrar sesión'>Cerrar sesión</div>
        </li>
      </Menu>
    </header>
  )
}
