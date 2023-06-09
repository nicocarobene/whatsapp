import { Nav, Search } from '../../icons/icons'
import perfil from '../../../assets/perfil.jpg'
import { Menu } from '../../MenuResponsive.tsx/Menu'
import { useState } from 'react'
export const NavCharUser = ({
  userPicture = perfil,
  userFriend = 'Nicolas Carobene'
}: { userPicture?: string, userFriend?: string }) => {
  const [visibiliti, setVisibiliti] = useState(true)
  return (
    <div className="flex justify-between bg-gray-100 py-3 px-4 border-l-[1px] border-gray-300">
      <div className="flex gap-4 items-center text-sm">
        <picture>
          <img src={userPicture} className="rounded-full w-10" />
        </picture>
        <a>{userFriend}</a>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <button>
          <Search />
        </button>
        <button onBlur={() => { if (!visibiliti)setVisibiliti(!visibiliti) }}
        onClick={() => { setVisibiliti(!visibiliti) }} className="group relative active:bg-gray-300 rounded-full p-2">
          <Nav />
          <Menu navbar={visibiliti} right='right-0' top='top-10'>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Info. del contacto">
                Info. del contacto
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Seleccionar mensajes">
                Seleccionar mensajes
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Cerrar chat">
                Cerrar chat
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Silenciar notificaciones">
                Silenciar notificaciones
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Mensajes temporales">
                Mensajes temporales
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Vaciar mensajes">
                Vaciar mensajes
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Eliminar chat">
                Eliminar chat
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Reportar">
                Reportar
              </div>
            </li>
            <li>
              <div className='hover:bg-gray-100' role="button" aria-label="Bloquear">
                Bloquear
              </div>
            </li>
          </Menu>
        </button>
      </div>
    </div>
  )
}
