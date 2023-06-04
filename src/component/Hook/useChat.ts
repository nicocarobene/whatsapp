import { useWhatsAppContext } from '../../store/store'
import { type Chat } from '../../types'
import { getChat } from '../Services/getChats'

export const useChat = () => {
  const { User, setChats } = useWhatsAppContext()
  const { chat, token } = User
  const newChat: Chat[] = []
  chat.forEach(chat => {
    void getChat({ idChat: chat, token })
      .then(chats => newChat.push(chats))
  })
  // setChats(newChat)
}
