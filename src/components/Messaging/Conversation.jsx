import Icon from '@/uitils/Icon';
import useConversation from '@/zustand/useConversation';
import React from 'react'

const Conversation = ({conversation, lastIdx}) => {
   const {selectedConversation,setSelectedConversation} = useConversation();
   const isSelected = selectedConversation?._id === conversation._id ;
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-green-500": ""}`}
            onClick={()=>setSelectedConversation(conversation)}>
         <div className='avatar'>
            <div className='w-12 rounded-full'>
               {/* <Icon name="profile" width={20} height={20} viewBox='0 0 20 20'></Icon> */}
               <img src="/assets/img/handsome.png" className='w-full h-full' alt="profile-avatar"/>
            </div>
         </div>
         <div className='flex flex-col flex-1'>
             <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{`${conversation.firstName}_${conversation.lastName}`}</p>
                <span>latest message</span>
             </div>
         </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
};

export default Conversation
