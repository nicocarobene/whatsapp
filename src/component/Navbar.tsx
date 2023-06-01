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
          >
            <Nav />
          </button>
        </div>
      </nav>
      <Menu navbar={navbar} right='right-10' top='top-14'>
        <li className="hover:bg-gray-100">
          <button>Nuevo grupo</button>
        </li>
        <li className="hover:bg-gray-100">
          <button>Perfil</button>
        </li>
        <li className="hover:bg-gray-100">
          <button>Mensajes destacados</button>
        </li>
        <li className="hover:bg-gray-100">
          <button>Etiquetas</button>
        </li>
        <li className="hover:bg-gray-100">
          <button>Configuración</button>
        </li>
        <li className="hover:bg-gray-100">
          <button>Cerrar sesión</button>
        </li>
      </Menu>
    </header>
  )
}
