import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { io } from "socket.io-client";


const SocketContext = createContext();
export const useSocketContext= ()=>{
    return useContext(SocketContext);
}
const SocketContextProvider = ({ children })=>{
    const [socket, setSocket]= useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useContext(AuthContext);
    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:8000",{
                query:{
                    userId: authUser.profile._id,
                }
            });
            setSocket(socket);
            socket.on("setOnlineUsers", (users)=>{
               setOnlineUsers(users);
            });
            return ()=> socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    );
};

export {SocketContext, SocketContextProvider};

