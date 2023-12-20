import {useState} from 'react'
import AwardsView from './Mainfile/AwardView';

const StateAward = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
const [award,setAward] = useState("")
    const [company, setCompany] = useState([]);
    const [location, setLocation] = useState([]);
     const [recDelete, setRecDelete] = useState("");
    const [dateError, setDateError] = useState(false);
    const [department, setDepartment] = useState([]);
    const [projectTitle, setProjectTitle] = useState("");
    const [clientName, setClientName] = useState("");
    const [projectManager, setProjectManager] = useState("");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    const [giftName, setGiftName] = useState("");
    const [errorGiftName, setErrorGiftName] = useState("");
    const [awardName, setAwardName] = useState("");
    const [errorAwardMsg, setAwardErrorMsg] = useState('');
    const [open,setOpen] = useState(false)
    const [errorMsg, setErrorMsg ] = useState('');
     const [employeeName, setEmployeeName] = useState('');
     
    const [formData, setFormData] = useState({
      awardName: "",
      awardDescription: "",
      giftItem: "",
      date: "",
      employeeName: "",
      awardBy: "",
      });
    return {
       giftName,setGiftName,errorGiftName,setErrorGiftName,awardName,setAwardName,employeeName,setEmployeeName,award,setAward,open,setOpen,formData,formVisible,toggle,location,recDelete,dateError,department, setDepartment, setDateError, setRecDelete, setLocation, company, setCompany,setToggle, setFormVisible,setFormData,projectTitle, setProjectTitle,clientName, setClientName,projectManager, setProjectManager,description, setDescription,summary, setSummary,errorAwardMsg,setAwardErrorMsg, errorMsg,setErrorMsg, 
 
    } 
}


export default StateAward;