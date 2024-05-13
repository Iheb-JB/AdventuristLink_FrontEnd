import { AuthContext, AuthProvider } from '@/hooks/AuthContext'
import { extractTime } from '@/uitils/extractTime';
import useConversation from '@/zustand/useConversation';
import React, { useContext } from 'react'

const Message = ({message}) => {
  const {authUser} = useContext(AuthContext);
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id ;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-green-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
          <div>
             <img alt='Tailwind CSS chat bubble component' src="/assets/img/handsome.png" className='w-12 max-w-12 rounded-full'/>
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message
