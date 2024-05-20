const { default: useConversation } = require("@/zustand/useConversation");
const { useSocketContext } = require("./SocketContext");
const { useEffect } = require("react");


const useListenMessages = ()=>{
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            setMessages([...messages, newMessage])
        });
        return ()=> socket?.off("newMessage");// listen only once for each message
    },[socket,setMessages,messages]);
}

export default useListenMessages;