import axios from 'axios';

export const saveLeave = async (formData) => {
    try{
        await axios.post(
            "http://13.200.246.216:5000/leaves/create/leave",
            formData
          );
    } catch(error) {
        console.error("saveLeave",error)
    }
}

export const deleteLeave= async (id) => {
    try{
        await axios.delete(`http://13.200.246.216:5000/leaves/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Leave",error)
    }
};

export const loadLeave = async () => {
    try {
       const result =  await axios.get(
            "http://13.200.246.216:5000/leave/get/leave",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load leave", error)
    }
}