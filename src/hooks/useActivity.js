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
            //console.log("Sending Activity Data to API:", activityData);
            const response = await  api.post('/activities', activityData);
           setActivities([...activities, response.data.activity]);
           toast.success('Activity created Successfully');
        } catch (error) {
            toast.error("Failed to create activity: " + error.message);
        }
        
    }
    return {createActivity};
}

export default useActivity;