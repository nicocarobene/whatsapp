import { useWhatsAppContext } from '../../../store/store'
import { type Chat } from '../../../types'
import { getChat } from '../../Services/getChats'
import { BarInputUser } from './BarInputUser'
import { useEffect } from 'react'
import { ChatUsers } from './ChatUsers'
import { NavCharUser } from './NavbarUser'
interface Prop {
  params: {
    id: string
  }
}
export const ChatWindow = ({ params }: Prop) => {
  const { User, Chat, setChat } = useWhatsAppContext()
  const { token } = User
  const { id } = params
  useEffect(() => {
    void getChat({ idChat: id, token })
      .then(chats => {
        const newChat: Chat[] = chats.body.message.map((chat: any) => {
          const { _id, user, updatedAt, message } = chat
          return {
            id: _id,
            username: user.user,
            name: user.name,
            date: updatedAt,
            message
          }
        })
        setChat(newChat)
      })
  }, [id])
  return (
    <div className="flex flex-col w-full min-w-[412px] min-h-[512px] h-screen bg-[#efeae2]">
      <NavCharUser />
      <ChatUsers chat={Chat}/>
      <BarInputUser chat={id}/>
    </div>
  )
}
