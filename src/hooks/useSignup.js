import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

const useSignup = (onSuccessfulSignup)=>{
    const {toggleSignUpModal} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const signup = async ({firstName , lastName , email , password , confirmPassword , isAdmin})=>{
    console.log('Signup function called', {firstName, lastName, email, password, confirmPassword, isAdmin});
   // console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    const success = handleInputErrors({firstName , lastName , email , password , confirmPassword , isAdmin});
    if(!success) return;
    setLoading(true);
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,{
            method: 'POST',
            headers:{
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName , lastName , email , password , confirmPassword , isAdmin}),
        }); 

        const data = await response.json();
        if(!response.ok) { throw new Error(data.error|| "An error occurred during signup");}
        if(onSuccessfulSignup) {
            onSuccessfulSignup();
        }
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
    }
    
    return {loading,signup};
}

export default useSignup;


function handleInputErrors({firstName , lastName , email , password , confirmPassword , isAdmin}){
    if(!firstName || !lastName || !email || !password || !confirmPassword){
        toast.error("Please Fill in all fields");
        return false ;
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }
    if(password.length < 8){
      toast.error("Password must be at least 8 characters long!");
      return false;
    }
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
     if (!emailRegex.test(email)) {
       toast.error("Invalid email address!");
       return false;
     }
     console.log('All inputs valid');
     return true;
}