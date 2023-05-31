import { useState } from 'react'
import { ChatDefaultLogo } from './chatDefaultIcon'
import { ChatWindow } from './ChatUser/ChatWindow'

export const EvalChat = () => {
  const [userChat, setUserChat] = useState(true)
  return (
    <>
    {
    userChat
      ? <ChatWindow/>
      : <ChatDefaultLogo/>
    }
    </>
  )
}
