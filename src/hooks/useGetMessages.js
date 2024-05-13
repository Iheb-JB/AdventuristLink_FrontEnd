import { useEffect, useState } from "react";

const { default: api } = require("@/api/api");
const { default: useConversation } = require("@/zustand/useConversation");
const { default: toast } = require("react-hot-toast");


const useGetMessages = ()=>{
    const {messages, setMessages, selectedConversation}= useConversation();
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setMessages([]);
        const getMessages= async()=>{
            if (!selectedConversation?._id) return;
            setLoading(true);
            try {
                
                const response = await api.get(`/messages/${selectedConversation._id}`);
                
                setMessages([...messages,response.data]);
            } catch (error) {
                toast.error(error.response?.data.message || "Failed to get message.");
            }finally{
                setLoading(false);
            }
        };
        getMessages();
    },[selectedConversation?._id, setMessages]);
   

    return {loading,messages};
}

export default useGetMessages;