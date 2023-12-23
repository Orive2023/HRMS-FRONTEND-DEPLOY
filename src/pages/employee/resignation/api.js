import axios from 'axios';

export const saveResignation = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8082/resignations/create/resignations",
            formData
          );
    } catch(error) {
        console.error("saveResignation",error)
    }
}

export const deleteResignation = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/resignations/delete/${id}`)
    } catch(error) {
        console.error("Error deleting department",error)
    }
};

export const loadResignation = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8082/resignations/get/resignations",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load reignation", error)
    }
}



