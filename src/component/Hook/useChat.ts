import { useEffect } from 'react'
import { type Chat } from '../../types'
import { getChat } from '../Services/getChats'
import { useWhatsAppContext } from '../../store/store'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3060')

export const useChat = ({ id }: { id: string }) => {
  const { User, setChat, SetLiveChat, Chat } = useWhatsAppContext()
  const { token } = User
  useEffect(() => {
    void getChat({ idChat: id, token })
      .then(chats => {
        console.log(chats)
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
    socket.emit('join room', id)
    socket.on('message', (chat) => {
      console.log({ User, chat })
      const { _id, updatedAt, message } = chat
      const newMessage = {
        id: _id,
        username: User.name,
        name: 'Nicolas Carobene',
        date: updatedAt,
        message
      }
      SetLiveChat(newMessage)
    })

    return () => {
      socket.disconnect()
      socket.off('message', (message) => {
        console.log(message)
      })
    }
  }, [id])
  return { LiveChat: Chat }
}
