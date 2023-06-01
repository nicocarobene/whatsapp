import { useState } from 'react'

export const Login = () => {
  const [visibiliti, setVisibiliti] = useState(false)
  return (
    <div className='w-full h-screen bg-gray-200'>
        <h1>Bienvenido a WhatsAppWeb</h1>
        <p>Para utilizar la app correctamente necesitas iniciar sesion o registrarte</p>
        <form className='inline-flex flex-col items-center py-2 px-4 gap-2 border-black border-[1px]'>
            <label>Usuario:<br/>
                <input type="text" name='user'/>
            </label>
            <label>Password:<br/>
                <div className='relative'>
                  <input type={visibiliti ? 'text' : 'password' } name='password'/>
                  <input className='absolute right-0' type="checkbox" name="visible" id="password" checked={visibiliti} onChange={() => { setVisibiliti(!visibiliti) }} />
                </div>
            </label>
            <button className='bg-white py-2 px-4 rounded-md w-1/2'>Login</button>
        </form>
    </div>
  )
}
