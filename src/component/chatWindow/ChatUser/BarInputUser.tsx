import { Emoji, Files, Microfone, Search } from '../../icons/icons'
import { useState } from 'react'
import { AddFiles } from './AddFiles'
import { useWhatsAppContext } from '../../../store/store'
import { sendMessage } from '../../Services/sendMessage'

export const BarInputUser = ({ chat }: { chat: string }) => {
  const { User } = useWhatsAppContext()
  const { token } = User
  const [visibiliti, setVisibiliti] = useState(false)
  const [isChart, setIsChart] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const entries = Object.fromEntries(new FormData(form))
    const { message } = entries
    const newMessage = {
      message: message.toString(),
      chat
    }
    void sendMessage({ token, newMessage })
      .then(chat => { console.log(chat) })
    form.reset()
  }

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
          <form className='flex w-full' onSubmit={handleSubmit} >
          <input onBlur={() => { setIsChart(false) }} onFocus={() => { setIsChart(true) }} className='input rounded-lg px-4 py-2 w-full outline-none placeholder:text-gray-500/90' name='message' placeholder='Escribe un mensaje aquí'/>
            <button className='mx-4 transition-all duration-300'>
              {
                isChart
                  ? <Search/>
                  : <Microfone/>
              }
            </button>
          </form>
    </div>
  )
}
