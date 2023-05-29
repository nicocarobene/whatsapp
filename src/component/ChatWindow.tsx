import { ChatDefault } from './icons'

export const ChatWindow = () => {
  return (
        <div className="bg-gray-100 w-full flex flex-col justify-center items-center border-b-[6px] border-green-500 min-w-[412px] min-h-[512px]">
        <div className="px-3 pl-10">
          <ChatDefault />
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div>
            <h1 className="text-3xl font-light text-gray-800">WhatsApp Web</h1>
          </div>
          <div data-testid="intro-text" className="text-center text-sm text-gray-500 px-5">
            Envía y recibe mensajes sin necesidad de tener tu teléfono
            conectado.
            <br />
            Usa WhatsApp en hasta 4&nbsp;dispositivos vinculados y
            1&nbsp;teléfono a la vez.
          </div>
        </div>
      </div>
  )
}
