interface newMessage {
  message: string
  chat: string
}
export const sendMessage = ({ newMessage, token }: { token: string, newMessage: newMessage }) => {
  return fetch('http://localhost:3060/message', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  })
    .then(resp => {
      if (!resp.ok) throw new Error('Something was wrong')
      return resp.json()
    })
    .then(json => json)
}
