
import api from "@/api/api";
import { useState, useEffect } from "react";
import {  toast } from "react-hot-toast";


const useGetConversations = ()=>{
    const [loading,setLoading] = useState(false);
    const [conversations, setConversations]= useState([]);

    useEffect(()=>{
      const getConversations = async ()=>{
        setLoading(true);
        try {
            const response = await api.get('/users');
           
            setConversations(response.data);
            
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
      }
      getConversations();
    },[]);

    return {loading, conversations};
}

export default useGetConversations;