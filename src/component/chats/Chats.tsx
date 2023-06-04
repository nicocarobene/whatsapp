import { useEffect } from 'react'
import { useWhatsAppContext } from '../../store/store'
import { getAllChat } from '../Services/getAllChat'
import { Chat } from './Chat'
import { type Query } from '../../types'

export const Chats = () => {
  const { ListChats, User, setListChats } = useWhatsAppContext()
  const { token } = User
  useEffect(() => {
    void getAllChat({ token })
      .then((chat: Query) => { setListChats(chat.body) })
  }, [User])
  return (
    <div className='flex flex-col h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-300'>
        {
          ListChats.map((chat) => (
            <Chat check={false} img={chat.img} time={chat.date} message={chat.prevmessage} notification={chat.notification} title={chat.name} user={chat.user} key={chat.id} id={chat.id} />
          ))
          }
    </div>
  )
}
