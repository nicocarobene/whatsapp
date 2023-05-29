import { Chat } from './Chat'
const mock = [
  {
    title: 'Nicolas Carobene',
    date: new Date(),
    img: 'https://pps.whatsapp.net/v/t61.24694-24/258882694_498400431456460_2850094461612749751_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS2ZL1tOMINi-0q8dwIPhylbMQOq57IYNzsEcQLjlRf-g&oe=64814B14',
    prevmessage: 'este es el mensaje previo',
    notification: 10,
    user: 'Nico',
    conversation: 'url'
  },
  {
    title: 'Nicolas Gonzalez',
    date: new Date(),
    img: 'https://pps.whatsapp.net/v/t61.24694-24/57181862_1193300914173034_2168605536952516608_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRbN5bFELRFFvlIme6gMgeWtsqcwQtDGFtd7FaC-cUZUQ&oe=64814853',
    prevmessage: 'este es el mensaje otro',
    notification: 12,
    user: 'Nico',
    conversation: 'url2'
  }
]
export const Chats = () => {
  console.log(mock[0].date.)
  return (
    <div className='flex flex-col h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-300'>
        {
          mock.map((chat, index) => (
            <Chat img={chat.img} message={chat.prevmessage} notification={chat.notification} title={chat.title} user={chat.user} key={index} time />
          ))
          }
    </div>
  )
}
