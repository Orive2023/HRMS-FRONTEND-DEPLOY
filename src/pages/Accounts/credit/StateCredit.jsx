import {useState} from 'react'

const StateCredit = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

 
  
  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
    const [open, setOpen] = useState(false);
   const [recDelete,setRecDelete] = useState("");
   const [genId, setGenId] = useState(1);
   const [fileError, setFileError] = useState("")
    const [file,setFile] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [descriptionError,setDescriptionError]= useState(false);
    const [description, setDescription] = useState("");
    const [purchaseError,setPurchaseError]= useState(false);
    const [subType,setSubType]= useState(false);
    const [credit,setCredit]= useState(false);
    const [purchaseBy, setPurchaseBy] = useState("");
    

  
    const [formData, setFormData] = useState({
      genId: "",
      genId: "",
      debitVoucherId: "",
      voucherType: "",
      creditAccountHead: "",
      date: "",
      remark: "",
      debitVoucherTableId: "",
      accountName: "",
      subType: "",
      ledgerComment: "",
      amount: "",
    });
  return {
    genId,setGenId,file,toggle,setToggle,subType,credit,setCredit,setSubType,purchaseError,setPurchaseError,purchaseBy, setPurchaseBy,setFile,description, setDescription,descriptionError,setDescriptionError,formVisible, setFormVisible,fileError,totalAmount, setTotalAmount, setFileError,dateError,setDateError,open,setOpen,formData,setFormData,recDelete,setRecDelete
  }
}

export default StateCredit;