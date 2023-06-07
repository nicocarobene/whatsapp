import { Chats } from './component/chats/Chats'
import Navbar from './component/Navbar'
import Searching from './component/Searching/Searching'
import { useWhatsAppContext } from './store/store'
import { Login } from './component/Login/Login'
import { Route } from 'wouter'
import { ChatDefaultLogo } from './component/chatWindow/chatDefaultIcon'
import { ChatWindow } from './component/chatWindow/ChatUser/ChatWindow'

export default function App () {
  const { User } = useWhatsAppContext()

  if (User.name === '') return <Login/>

  return (
    <div className=" bg-white flex w-full h-screen scrollbar-thin scrollbar-thumb-gray-300 ">
      <div className="max-w-[40%] min-w-[21rem] flex flex-col w-full">
        <Navbar />
        <Searching />
        <Chats/>
      </div>
      <Route path="/" component={ChatDefaultLogo} />
      <Route path='/:id' component={ChatWindow}/>
    </div>
  )
}
