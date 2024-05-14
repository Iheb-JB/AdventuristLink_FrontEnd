import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import api from "@/api/api";
import toast from "react-hot-toast";


const useActivity = ()=>{
    const[activities,setActivities]= useState([]);
    //const {authUser} = useContext(AuthContext);

    const createActivity = async(activityData)=>{
        try {
            const response = await  api.post('/activities', activityData);
           setActivities([...activities, response.data.activity]);
           toast.success('Activity created Successfully');
           return response.data.activity;
        } catch (error) {
            toast.error("Failed to create activity: " + error.message);
            throw error;
        }
        
    }
    return {createActivity};
}

export default useActivity;