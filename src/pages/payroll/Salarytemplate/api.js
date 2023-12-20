import axios from 'axios';

export const saveSalaryTemplate = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8085/salaryTemplate/create/salaryTemplate",
            formData
          );
    } catch(error) {
        console.error("savePayroll",error)
    }
}

export const deleteSalaryTemplate = async (id) => {
    try{
        await axios.delete(`http://localhost:8085/salaryTemplate/delete/${id}`)
        loadSalaryTemplate();
    } catch(error) {
        console.error("Error deleting Payroll",error)
    }
};

export const loadSalaryTemplate = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8085/salaryTemplate/get/salaryTemplate",
            {
              validateStatus: () => {
                return true;
              },
            }
          );
          return result.data
    } catch (error) {
        console.error("Error load department", error)
    }
}