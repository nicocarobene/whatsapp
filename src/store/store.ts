import { create } from 'zustand'
import { type ListChat, type Chat, type User } from '../types.d'

const mock = [
  {
    name: 'Nicolas Carobene',
    date: new Date(1685253154000),
    img: 'https://pps.whatsapp.net/v/t61.24694-24/258882694_498400431456460_2850094461612749751_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS2ZL1tOMINi-0q8dwIPhylbMQOq57IYNzsEcQLjlRf-g&oe=64814B14',
    prevmessage: 'este es el mensaje previo',
    notification: 10,
    user: 'Nico',
    id: '1'
  },
  {
    name: 'Nicolas Gonzalez',
    date: new Date(1635153154000),
    img: 'https://pps.whatsapp.net/v/t61.24694-24/57181862_1193300914173034_2168605536952516608_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRbN5bFELRFFvlIme6gMgeWtsqcwQtDGFtd7FaC-cUZUQ&oe=64814853',
    prevmessage: 'este es el mensaje otro',
    notification: 12,
    user: 'Nico',
    id: '2'
  }
]

const DEFAULT_VALUE = {
  id: '',
  name: '',
  token: '',
  chat: []
}

const initialValue: User = (() => {
  const isUserLogin = window.localStorage.getItem('user__wp')
  const username = (isUserLogin != null) ? JSON.parse(isUserLogin) : DEFAULT_VALUE
  return username
})()

export interface WhatsAppStore {
  User: User
  ListChats: ListChat[]
  Chat: Chat[]
  setUser: (user: User) => void
  setListChats: (chats: ListChat[]) => void
  setChat: (chat: Chat[]) => void
}

export const useWhatsAppContext = create<WhatsAppStore>((set) => ({
  User: initialValue,
  ListChats: mock,
  Chat: [],
  setUser: (user) => {
    set({ User: user })
  },
  setListChats: (chat) => {
    set({ ListChats: chat })
  },
  setChat: (chat) => {
    set({ Chat: chat })
  }
}))
export type { User }
