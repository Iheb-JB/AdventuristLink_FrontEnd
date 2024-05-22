'use client'
import React, { useContext, useEffect } from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '@/zustand/useConversation'
import useGetMessages from '@/hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import Messages from './Messages'
import { AuthContext } from '@/hooks/AuthContext'


const MessageContainer = () => {
  const {selectedConversation , setSelectedConversation} = useConversation();
  

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
             {`${selectedConversation.username}`}
             </span>
          </div>
          <Messages/>
          <MessageInput/>
        </>
        )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
  const {authUser} = useContext(AuthContext);
  return(
     <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
           <p> Welcome </p>
           <p>Select a chat or start a new conversation</p>
           <TiMessages className='text-3xl md:text-6xl text-center'/>
        </div>
     </div>
  );
}
