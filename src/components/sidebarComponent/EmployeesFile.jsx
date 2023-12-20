import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeesFile = () => {

    const [empDropdown, setEmpDropdown] = useState("org-dropdown");
  const handleEmpclick = () => {
    if (empDropdown === "org-dropdown") {
      setEmpDropdown("org-open");
    } else {
      setEmpDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate()
  return (
    <div>
        <p id="dropdown" onClick={handleEmpclick}>
          Employees<i className="fa-solid fa-caret-down"></i>
        </p>
        <div className={empDropdown}>
         
            <p onClick={() => navigation('/employee/employee')}>Employees</p>
                 
            <p onClick={() => navigation('/employee/awards')}>Awards</p>
         
            <p onClick={() => navigation('/employee/transfer')}>Transfers</p>
         
            <p onClick={() => navigation('/employee/resignation')}>Resignation</p>
          
            <p onClick={() => navigation('/employee/travel')}>Travels</p>
          
            <p onClick={() => navigation('/employee/promotions')}>Promotions</p>
         
            <p onClick={() => navigation('/employee/complaints')}>Complaints</p>
        
            <p onClick={() => navigation('/employee/warning')}>Warnings</p>
         
            <p onClick={() => navigation('/employee/termination')}>Termination</p>
                    
            <p onClick={() => navigation('/employee/employee-exit')}>Employee Exit</p>
          
        </div>
    </div>
  )
}

export default EmployeesFile