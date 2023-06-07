import { useWhatsAppContext } from '../../../store/store'
import { type Chat } from '../../../types'
import { MessageFriend, MessageUser } from '../../icons/icons'
interface Prop {
  chat: Chat[]
}
// mock 0 :
//   date : "2023-06-03T12:23:50.601Z"
//   id : "647b30d5fd0c1e5556ce8220"
//   message:  "integrando DB con WS2"
//   name: "Nicolas Carobene"
//   username : "Nico97"

export const ChatUsers = ({ chat }: Prop) => {
  const { User } = useWhatsAppContext()
  const { name } = User
  return (
    <div className="flex flex-col bg-[url('assets/fondoWsp.png')] h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 gap-1 px-2 overflow-x-hidden py-3">
      {chat.map((item, index) => {
        let pestaña = index === 0
        if ( !pestaña && chat[index - 1].name !== item.username) {
          pestaña = true
        }
        const isUser = item.username === name
        return (
          <div key={index} className={`${isUser ? 'text-right' : 'text-left'} relative `}>
            <div className={`absolute ${isUser ? 'right-0' : 'left-0'}`}>
              {isUser && pestaña && <MessageUser/>}
              {pestaña && !isUser && <MessageFriend/>}
            </div>
            <div
              className={`${
                isUser
                  ? 'bg-[#d9fdd3] rounded-tr-none'
                  : 'bg-white rounded-tl-none'
              } text-[#535a5f] inline-block rounded-lg py-2 px-2 mx-2 text-sm`}>
              <p>{item.message}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
