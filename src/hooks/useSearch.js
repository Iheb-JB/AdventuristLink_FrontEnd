const { default: api } = require("@/api/api");
const { useState } = require("react");
const { default: toast } = require("react-hot-toast");


const useSearch = ()=>{
    const [itineraries, setItineraries] = useState([]);

    const searchItineraries = async (searchCriteria) =>{
        try {
            const response = await api.post('search-itineraries', searchCriteria);
            setItineraries(response.data);
            toast.success('Search completed successfully');
            return response.data ;
        } catch (error) {
            toast.error("Search failed: " + error.message);
            throw error;
        }
    };
    return {itineraries, searchItineraries};

}

export default useSearch;