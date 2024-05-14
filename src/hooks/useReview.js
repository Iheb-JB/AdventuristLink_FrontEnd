import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import api from "@/api/api";
import toast from "react-hot-toast";


const useReview = ()=>{
    const {authUser} = useContext(AuthContext);

    const submitReview = async(reviewData)=>{

        try {
            const response = await api.post('/reviews', reviewData);
           if(response.status === 201){
            toast.success('destination added successfully');
           return response.data ;
           }
        } catch (error) {
            toast.error("Failed to submit review: " + error.message);
            throw error;
        }
       
    };
    
    return {submitReview};
}

export default useReview;