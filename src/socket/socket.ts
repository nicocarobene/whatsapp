import { io } from 'socket.io-client'

export const socket = io('http://localhost:3060', {extraHeaders: {'iduser': '1234'}})

// 647b307cfd0c1e5556ce8219