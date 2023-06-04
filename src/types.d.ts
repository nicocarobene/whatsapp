export interface User {
  id: string
  name: string
  token: string
  chat: string[]
}
export interface ListChat {
  id: string
  name: string
  user: string
  date: Date
  prevmessage: string
  notification?: number
  check?: boolean
  img?: string
}

export interface Query {
  error: string
  body: ListChat[]
}

export interface Chat {
  id: string
  name: string
  date: Date
  message: string
  username: string
}
