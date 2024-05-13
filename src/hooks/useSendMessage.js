const { default: api } = require("@/api/api");
const { default: useConversation } = require("@/zustand/useConversation");
const { default: toast } = require("react-hot-toast");


const useSendMessage = ()=>{
    const {messages, setMessages, selectedConversation}= useConversation();

    const sendMessage= async(messageText)=>{
        try {
            if(!messageText.trim()){return;}
            const response = await api.post(`/messages/send/${selectedConversation._id}`,{
                message: messageText // 
              });
            
            setMessages([...messages,response.data]);
        } catch (error) {
            toast.error(error.response?.data.message || "Failed to send message.");
        }
    }

    return {sendMessage};
}

export default useSendMessage;