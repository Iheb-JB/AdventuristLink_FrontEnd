'use client'
import { useEffect, useRef } from "react";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "@/hooks/useListenMessages";

const { default: useGetMessages } = require("@/hooks/useGetMessages");



const Messages = ()=>{
 const {loading,messages}= useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
        lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },100)
  },[messages]);


  return (
    <div key={Math.random()} className='px-4 flex-1 overflow-auto'>
    {!loading && messages.length > 0 &&
      messages.map((n)=> (
      <div key={n._id} ref={lastMessageRef}>
      <Message message={n} />
      </div>
      ))}
    
    {loading && [...Array(3)].map((idx)=> <MessageSkeleton key={idx}/>)}
    {!loading && messages.length === 0 &&(
      <p className='text-center'>Send a message to start the conversation</p>
    )}
  </div>
  );
};

export default Messages;