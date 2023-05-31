import { Chats } from './component/chats/Chats'
import Navbar from './component/Navbar'
import Searching from './component/Searching/Searching'
import { EvalChat } from './component/chatWindow/EvalChat'

export default function App () {
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
