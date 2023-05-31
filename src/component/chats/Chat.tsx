import perfil from '../../assets/perfil.jpg'
interface Prop {
  img: string
  title: string
  time: string
  user: string
  message: string
  notification: number
}
export const Chat = ({ img = perfil, title = 'Nombre de Grupo', time = '11:19 A.M.', user = 'Cami', message = 'parte de mensaje', notification }: Prop) => {
  return (
    <button className='w-full hover:bg-gray-200'>
      <div className="flex items-center px-3 gap-3">
        <picture>
          <img className="w-14 rounded-full" src={img} />
        </picture>
        <div className=' py-3 w-full pr-2 border-t-[1px]'>
          <div className='flex justify-between'>
            <h3>{title}</h3>
            <span className='text-xs font-medium text-green-600'>{time}</span>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm'>
              <span>{user}</span>: <span>{message}</span>
            </p>
            {
              notification
                ? (<div className='w-5 rounded-full bg-[#25d366] flex items-center justify-center'>
                <span className='text-xs text-white font-medium'>{notification}</span>
            </div>)
                : ''
            }
          </div>
        </div>
      </div>
    </button>
  )
}
