import axios from 'axios';

export const saveAward = async (formData) => {
    try{
        await axios.post(
            "http://13.200.246.216:5000/awards/create/awards",
            formData
          );
    } catch(error) {
        console.error("saveAward",error)
    }
}

export const deleteAward = async (id) => {
    try{
        await axios.delete(`http://13.200.246.216:5000/awards/delete/${id}`)
    } catch(error) {
        console.error("Error deleting award",error)
    }
};

export const loadAward = async () => {
    try {
       const result =  await axios.get(
            "http://13.200.246.216:5000/awards/get/awards",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load award", error)
    }
}

export const fetchCompanies = async () => {
    try {
        const response = await axios.get(
            "http://13.200.246.216:5000/awards/get/awards"
          );
          return response.data
    } catch (error){
        console.error("Error fetching award data", error);
        return []
    }
}

export const fetchLocations = async () => {
    try {
        const response = await axios.get(
          "http://13.200.246.216:5000/awards/get/awards"
        );
       return response.data 
      } catch (error) {
        console.error("Error fetching award data", error);
      }
}