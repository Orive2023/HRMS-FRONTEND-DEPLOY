import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayrollLogo from "../../asset/24px/Payroll.png"

const PayrollFile = () => {
    const [payDropdown, setPayDropdown] = useState("org-dropdown");
    const handlePayclick = () => {
        if (payDropdown === "org-dropdown") {
          setPayDropdown("org-open");
        } else {
          setPayDropdown("org-dropdown");
        }
      };

      const navigation = useNavigate()
  return (
    <div>
    <div className="logo-text-p" onClick={handlePayclick}>
    <span></span>
        <img src={PayrollLogo} alt="Payroll"/>
        <p id="dropdown">
          Payroll<i class='bx bx-chevron-down'></i>
        </p>
    </div>
        <div className={payDropdown}>
          <p onClick={() => navigation("/payroll/sakaryTemplate")}>Payroll Templates</p>
          {/* <p onClick={() => navigation("/payroll/hourly-wages")}>Hourly Wages</p> */}
          <p onClick={() => navigation("/payroll/manage-salary")}>Manage Salary</p>
          <p onClick={() => navigation("/payroll/advanceSalary")}>Advance Salary</p>
          {/* <p onClick={() => navigation("/payroll/generate-payslip")}>Generate Payslip</p> */}
          {/* <p onClick={() => navigation("/payroll/payment-history")}>Payment History</p> */}
        </div>
    </div>
  )
}

export default PayrollFile