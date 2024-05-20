const { useContext, useState } = require("react")
const { AuthContext } = require("./AuthContext");
const { default: api } = require("@/api/api");
const { default: toast } = require("react-hot-toast");


const useItinerary = ()=>{
    const {authUser} = useContext(AuthContext);
    const [itinerary , setItinerary]= useState(null);

    const addDestination = async(destinationData)=>{

        try {
            const response = await api.post('/destinations', destinationData);
        if(response.status === 201){
            toast.success('destination added successfully');
            return response.data ;
        }
        } catch (error) {
            toast.error("Failed to add destination: " + error.message);
           throw error;
        }
    };

    const addParticipant = async(itineraryId ,username)=>{
        try {
            const response = await api.post(`/itineraries/${itineraryId}/addParticipant`, {username});
            if(response.status === 200){
                toast.success('participant added successfully');
                return response.data ;
            }
        } catch (error) {
            toast.error("Failed to add participant: " + error.message);
            throw error;
        }
    };
    
    const createItinerary = async(itineraryData)=>{
        try {
            const response = await api.post('/itineraries', itineraryData);
            setItinerary(response.data);
            if(response.status === 201){
                toast.success('your itinerary have been created successfully !');
            }
        } catch (error) {
            toast.error("Failed to create itinerary: " + error.message);
            console.log(error.message);
        }
    };
    return {addDestination, addParticipant ,createItinerary, itinerary};
}

export default useItinerary;