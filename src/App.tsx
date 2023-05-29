import { ChatWindow } from './component/ChatWindow'
import { Chats } from './component/Chats'
import Navbar from './component/Navbar'
import Searching from './component/Searching'

export default function App () {
  return (
    <div className=" bg-white flex w-full h-screen  overflow: scroll; ">
      <div className="max-w-[40%] min-w-[21rem] flex flex-col w-full">
        <Navbar />
        <Searching />
        <Chats/>
      </div>
      <ChatWindow />
    </div>
  )
}
