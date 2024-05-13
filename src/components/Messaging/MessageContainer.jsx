'use client'
import React, { useEffect } from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '@/zustand/useConversation'
import useGetMessages from '@/hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'

const MessageContainer = () => {
  const {selectedConversation , setSelectedConversation} = useConversation();
  const {loading,messages}= useGetMessages();
  console.log("messages:", messages);

  useEffect(()=>{ // cleanup function when page is not in the browser
    return()=> setSelectedConversation(null);
  },[setSelectedConversation]);
  return (
    <div className='flex flex-col w-full'>
        {! selectedConversation ? (
          <NoChatSelected/>
        ):(
          <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
             <span className='label text'>To:</span>{" "}
             <span className='text-gray-900 font-bold'>
             {`${selectedConversation.firstName} ${selectedConversation.lastName}`}
             </span>
          </div>
          <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 && messages.map((message)=><Message key={message._id} message={message}/>)}
            {loading && [...Array(3)].map((idx)=> <MessageSkeleton key={idx}/>)}
            {!loading && messages.length === 0 &&(
              <p className='text-center'>Send a message to start the conversation</p>
            )}
           
          </div>
          <MessageInput/>
        </>
        )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
  return(
     <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
           <p> Welcome Iheb Jab</p>
           <p>Select a chat or start w new conversation</p>
           <TiMessages className='text-3xl md:text-6xl text-center'/>
        </div>
     </div>
  );
}
