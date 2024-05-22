import { useSocketContext } from '@/hooks/SocketContext';
import Icon from '@/uitils/Icon';
import useConversation from '@/zustand/useConversation';
import React from 'react'

const Conversation = ({conversation, lastIdx}) => {
   const {selectedConversation,setSelectedConversation} = useConversation();
   const isSelected = selectedConversation?._id === conversation._id ;
   const {onlineUsers} = useSocketContext();
   const isOnline= onlineUsers.includes(conversation._id);
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-green-500": ""}`}
            onClick={()=>setSelectedConversation(conversation)}>
         <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
               {/* <Icon name="profile" width={20} height={20} viewBox='0 0 20 20'></Icon> */}
               <img src={conversation.profilePicture} className='w-full h-full' alt="profile-avatar"/>
            </div>
         </div>
         <div className='flex flex-col flex-1'>
             <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{`${conversation.username}`}</p>
             </div>
         </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
};

export default Conversation
