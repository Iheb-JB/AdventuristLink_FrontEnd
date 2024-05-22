import { useState, useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

const useLogin = ()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser , toggleLoginModal} = useContext(AuthContext);


    const login = async (email,password)=>{
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,{
             method: 'POST',
             headers:{
                'Content-Type': 'application/json'
             },
             body: JSON.stringify({email,password})
            });
            const data = await response.json();
            console.log(data);
            if(!response.ok){throw new Error(data.error || "Login failed");}
            localStorage.setItem('adventur-user', JSON.stringify(data));
            setAuthUser(data);
           // Directly redirect to the profile completion page if profile is not complete
           if (!data.profile) {
            window.location.href = '/customer-dashboard/customer-profile';  // Redirects directly
        } else {
            window.location.href = '/'; 
        }
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    };
    
    return {loading,login};
}

export default useLogin;