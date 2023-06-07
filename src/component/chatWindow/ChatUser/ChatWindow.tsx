import { BarInputUser } from './BarInputUser'
import { ChatUsers } from './ChatUsers'
import { NavCharUser } from './NavbarUser'
import { useChat } from '../../Hook/useChat'

interface Prop {
  params: {
    id: string
  }
}

export const ChatWindow = ({ params }: Prop) => {
  const { id } = params
  const { LiveChat } = useChat({ id })

  // useEffect(() => {
  //   const socket = io('http://localhost:3060')
  //   socket.emit('join room', id)
  //   socket.on('message', (chat) => {
  //     console.log({User, chat})
  //     const { _id, updatedAt, message } = chat
  //       const newMessage = {
  //         id: _id,
  //         username: User.name,
  //         name: 'Nicolas Carobene',
  //         date: updatedAt,
  //         message
  //       }
  //       SetLiveChat(newMessage)
  //     })

  //   return () => {
  //     socket.disconnect()
  //     socket.off('message', (message) => {
  //       console.log(message)
  //     })
  //   }
  // }, [id])

  return (
    <div className="flex flex-col w-full min-w-[412px] min-h-[512px] h-screen bg-[#efeae2]">
      <NavCharUser />
      <ChatUsers chat={LiveChat}/>
      <BarInputUser chat={id}/>
    </div>
  )
}
