export const getChat = ({ idChat, token }: { idChat: string, token: string }) => {
  return fetch(`http://localhost:3060/chat/${idChat}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('credential is wrong')
      }
      return res.json()
    })
    .then(json => json)
}
