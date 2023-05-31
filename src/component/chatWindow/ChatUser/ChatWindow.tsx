import { Emoji, Files, Microfone } from '../../icons/icons'
import { BarInputUser } from './BarInputUser'
import { ChatUsers } from './ChatUsers'
import { NavCharUser } from './NavbarUser'

export const ChatWindow = () => {
  return (
    <div className="flex flex-col w-full min-w-[412px] min-h-[512px] h-screen bg-[#efeae2]">
      <NavCharUser />
      <ChatUsers/>
      <BarInputUser/>
    </div>
  )
}
