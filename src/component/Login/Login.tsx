import { useState } from 'react'
import { useLogin } from '../Services/Login'
import { type User, useWhatsAppContext } from '../../store/store'

export const Login = () => {
  const [visibiliti, setVisibiliti] = useState(false)
  const { setUser } = useWhatsAppContext()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const { user, password } = Object.fromEntries(form)
    void useLogin({ user, password })
      .then((newuser) => {
        setUser(newuser as User)
        window.localStorage.setItem('user__wp', JSON.stringify(newuser))
      })
      .catch((e) => { console.error(e) })
  }
  return (
    <div className='w-full h-screen bg-gray-200'>
        <h1>Bienvenido a WhatsAppWeb</h1>
        <p>Para utilizar la app correctamente necesitas iniciar sesion o registrarte</p>
        <form onSubmit={handleSubmit} className='inline-flex flex-col items-center py-2 px-4 gap-2 border-black border-[1px]'>
            <label>Usuario:<br/>
                <input type="text" name='user'/>
            </label>
            <label>Password:<br/>
                <div className='relative'>
                  <input type={visibiliti ? 'text' : 'password' } name='password'/>
                  <input className='absolute right-0 mt-1' type="checkbox" name="visible" id="password" checked={visibiliti} onChange={() => { setVisibiliti(!visibiliti) }} />
                </div>
            </label>
            <button className='bg-white py-2 px-4 rounded-md w-1/2'>Login</button>
        </form>
    </div>
  )
}
