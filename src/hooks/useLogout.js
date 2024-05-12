import { useState, useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogout = ()=>{
    const {setAuthUser} = useContext(AuthContext);

    const logout = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/auth/logout');
          if (response.status === 200) {
            setAuthUser(null);
            localStorage.removeItem('adventur-user'); // Clear stored token if any
            toast.success('Logged out successfully');
          }
        } catch (error) {
          console.error('Logout failed:', error);
          toast.error('Failed to log out');
        }
      };
      return{logout};
}

export default useLogout;