import { create } from 'zustand'
interface User {
  name: string
  user: string
  message: string[]
  password: string
}
export interface WhatsAppStore {
  User: User
  setUser: (user: User) => void
  fetchingChat: (limit: number) => Promise<void>
}
export const useWhatsAppContext = create<WhatsAppStore>((set) => ({
  User: {
    name: '',
    user: '',
    message: [],
    password: ''
  },
  setUser: (user) => {
    set({ User: user })
  },
  fetchingChat: async (limit) => { console.log('hola', limit) }
}))
