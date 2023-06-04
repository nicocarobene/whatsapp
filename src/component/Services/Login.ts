import { type User } from '../../store/store'

interface Props {
  user: string
  password: string
}
export const useLogin = (User: Props) => {
  return fetch('http://localhost:3060/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(User)
  })
    .then((res) => {
      if (!res.ok) throw new Error('Credential was wrong')
      return res.json()
    })
    .then(json => {
      const { user, token, chat, id } = json.body
      const newUser: User = {
        id,
        name: user,
        token,
        chat
      }
      return newUser
    })
    .catch(e => {
      console.log(e)
    })
}
