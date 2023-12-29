import axios from "axios";

const url = "http://localhost:8093"

export const saveDebit = async (formData) => {
    try{
        await axios.post(
            `${url}/debit/create/debit`,
            formData
          );
    } catch(error) {
        console.error("saveDebit",error)
    }
}


  export const loadDebit = async () => {
    try {
       const result =  await axios.get(
            `${url}/debit/get/debit`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load debit", error)
    }
}

export const deleteDebit = async (id) => {
    try{
        await axios.delete(`${url}/debit/delete/${id}`)
    } catch(error) {
        console.error("Error deleting debit",error)
    }
};
export const fetchsubType = async () => {
  try {
      const response = await axios.get(
          "http://localhost:8093/subType/get/subType"
        );
        return response.data
  } catch (error){
      console.error("Error fetching subtype data", error);
      return []
  }
}