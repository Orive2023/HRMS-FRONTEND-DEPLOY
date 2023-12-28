import { useState } from "react";

const StateAccountBalance = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [AccountBalance, setAccountBalance] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [genId, setGenId] = useState(1);
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [ledgerError, setLedgerError] = useState(false);
  const [ledgerComment, setLedger] = useState("");
  const [purchaseError, setPurchaseError] = useState(false);
  const [purchaseBy, setPurchaseBy] = useState("");

  const [formData, setFormData] = useState({
     employeeName: "",
        employeeId: "",
        department: "",
        position: "",
        hsaBalance: "",
        fsaBalance: "",
        retirementAccountBalance: "",
        otherBenefitsAccountsBalance: "",
        expenseReimbursementAccountBalance: "",
        details: "",
        vacationDaysBalance: "",
        sickDaysBalance: "",
        personalDaysBalance: "",
        floatingHolidaysBalance: "",
        accountType: "",
        accountBalance: "",
        purpose: "",
        comments: ""
  });

 
  return {
    AccountBalance,
    setAccountBalance,
    genId,
    setGenId,
    file,
    toggle,
    setToggle,
    purchaseError,
    setPurchaseError,
    purchaseBy,
    setPurchaseBy,
    setFile,
    formVisible,
    ledgerError,
    setLedgerError,
    ledgerComment,
    setLedger,
    setFormVisible,
    fileError,
    totalAmount,
    setTotalAmount,
    setFileError,
    dateError,
    setDateError,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
  };
};

export default StateAccountBalance;
