import { useState } from 'react'
import { ChatDefaultLogo } from './chatDefaultIcon'
import { ChatWindow } from './ChatUser/ChatWindow'
import { useWhatsAppContext } from '../../store/store'

export const EvalChat = () => {
  const { increment, initialValue } = useWhatsAppContext()
  console.log(initialValue)
  return (
    <>
    {
    initialValue
      ? <ChatWindow/>
      : <ChatDefaultLogo/>
    }
    </>
  )
}
