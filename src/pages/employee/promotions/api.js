import axios from 'axios';

export const savePromotion = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8082/promotions/create/promotions",
            formData
          );
    } catch(error) {
        console.error("savePromotion",error)
    }
}

export const deletePromotion = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/promotions/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadPromotion = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8082/promotions/get/promotions",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load promotion", error)
    }
}

export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8082/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}