import perfil from '../../assets/perfil.jpg'
import { Link } from 'wouter'
import { getRelativeTime } from '../Utils/getRealtiveTime'
interface Prop {
  img?: string
  title: string
  time: Date
  user: string
  message: string
  notification?: number
  id: string
  check?: boolean
}
export const Chat = ({ id, check = false, img = perfil, title = 'Nombre de Grupo', time = new Date(1685253154000), user = 'Cami', message = 'parte de mensaje', notification }: Prop) => {
  const newDate = new Date(time)
  const timeAgo = getRelativeTime(Number(newDate) / 1000)
  return (
    <Link to={`${id}`} className='w-full'>
      <div className="flex items-center px-3 gap-3 hover:bg-gray-200 cursor-pointer">
        <picture>
          <img className="w-14 rounded-full" src={img} />
        </picture>
        <div className='py-3 w-full pr-2 border-t-[1px]'>
          <div className='flex justify-between'>
            <h3>{title}</h3>
            {
              check
                ? <span className='text-xs'>11:00 AM</span>
                : <span className='text-xs font-medium text-green-600'>{timeAgo}</span>
            }
          </div>
          <div className='flex justify-between'>
            <p className='text-sm'>
              <span>{user}</span>: <span>{message}</span>
            </p>
            {
              (notification != null) && (
                <div className='w-5 rounded-full bg-[#25d366] flex items-center justify-center'>
                  <span className='text-xs text-white font-medium'>{notification}</span>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </Link>
  )
}
