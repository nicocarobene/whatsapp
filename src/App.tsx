import { Chats } from './component/chats/Chats'
import Navbar from './component/Navbar'
import Searching from './component/Searching/Searching'
import { EvalChat } from './component/chatWindow/EvalChat'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { useWhatsAppContext } from './store/store'
import { Login } from './component/Login/Login'

const socket = io('http://localhost:3060')

export default function App () {
  const { User, setUser } = useWhatsAppContext()
  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message)
    })
    return () => {
      socket.off('message', (message) => {
        console.log(message)
      })
    }
  }, [])
  if (User.user === '') return <Login/>
  return (
    <div className=" bg-white flex w-full h-screen overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 ">
      <div className="max-w-[40%] min-w-[21rem] flex flex-col w-full">
        <Navbar />
        <Searching />
        <Chats/>
      </div>
      <EvalChat />
    </div>
  )
}
