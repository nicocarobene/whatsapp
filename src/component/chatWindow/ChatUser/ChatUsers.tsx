import { MessageFriend, MessageUser } from '../../icons/icons'

const mock = [
  {
    user: 'Nico',
    message: 'hola, como estas?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'hola, todo bien y vos?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'cansado de estudiar?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'o has podido descansar esta semana?',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'Si, he podido descansar gracias a dios jajaja',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'He tenido examenes la semana pasada y ahora estoy de vaciones',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'Estoy tranqui ahora',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'que bueno, me alegro entonces!!',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'y vos como venis con la facu?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'con la facu bien por suerte',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'todavia no comenzamos los examenes',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'calculo que la semana que viene empezaremos a ver las fechas',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'hola, como estas?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'hola, todo bien y vos?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'hola, cansado de estudiar?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'o has podido descansar esta semana?',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'Si, he podido descansar gracias a dios jajaja',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'He tenido examenes la semana pasada y ahora estoy de vaciones',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'Estoy tranqui ahora',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'que bueno, me alegro entonces!!',
    time: new Date()
  },
  {
    user: 'Nico',
    message: 'y vos como venis con la facu?',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'con la facu bien por suerte',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'todavia no comenzamos los examenes',
    time: new Date()
  },
  {
    user: 'Martin',
    message: 'calculo que la semana que viene empezaremos a ver las fechas',
    time: new Date()
  }
]

export const ChatUsers = () => {
  return (
    <div className="flex flex-col bg-[url('assets/fondoWsp.png')] h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 gap-1 px-2 overflow-x-hidden py-3">
      {mock.map((item, index) => {
        let pestaña = false
        if (index !== 0 && mock[index - 1].user !== item.user) {
          pestaña = true
        }
        const user1 = 'Nico'
        const isUser = item.user === user1
        return (
          <div key={index} className={`${isUser ? 'text-right' : 'text-left'} relative `}>
            <div className={`absolute ${isUser ? 'right-0' : 'left-0'}`}>
              {isUser && pestaña && <MessageUser/>}
              {pestaña && !isUser && <MessageFriend/>}
            </div>
            <div
              className={`${
                isUser ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'
              } text-[#535a5f] inline-block rounded-lg py-2 px-2 mx-2 text-sm`}
            >
              <p>{item.message}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
