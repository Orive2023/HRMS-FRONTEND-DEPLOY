import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateSalaryTemplate from "./StateSalaryTemplate";

const DepartmentForm = ({formData,
  setFormData}) => {
  const navigate = useNavigate();

  const {
    setSalary,
    grossSal,
    setGrossSal,
    deduction,
    setDeduction,
    netAmount,
    setNetAmount,
    
    pfVal, 
    setPfVal
  } = StateSalaryTemplate();

  const loadSalaryTemplate = async () => {
    const result = await api.loadSalaryTemplate();
    setSalary(result);
  };

  useEffect(() => {
    loadSalaryTemplate();
    calculatePf();
    calculateGross();
    calculateDeduction();
    netSalary();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      grossSalary:grossSal,
      netSalary:netAmount,
      pfAllowance:pfVal,
      totalDeduction:deduction,
    });
    calculateGross();
    calculateDeduction();
    netSalary();
    calculatePf()
  };

  const saveSalaryTemplate = async () => {
    await api.saveSalaryTemplate(formData);
    loadSalaryTemplate();
    navigate("/payroll/salaryTemplate ");
    setFormData({
      basicSalary:"",
      houseRentAllowance:"",
      medicalAllowance:"",
      transportAllowance:"",
      taxDeductiion:"",
      dearnessAllowance:"",
      grossSal:"",
      deduction:"",
      netAmount:"",
      payrollTemplate:"",
      createdDate:""
    });
  };

  console.log(pfVal)

  const handleSubmit = (e) => {
    loadSalaryTemplate();
  };

  const calculateGross = () => {
    let grossTotal =
      parseInt(formData.basicSalery) +
      parseInt(formData.houseRentAllowance) +
      parseInt(formData.transportAllowance);
    setGrossSal(grossTotal);
  };

  const calculatePf = () => {
    let pfvalue = parseInt(formData.basicSalery * 0.12);
    setPfVal(pfvalue);
  };

  const calculateDeduction = () => {
    let deductionTotal =
      parseInt(formData.medicalAllowance) +
      parseInt(pfVal) +
      parseInt(formData.taxDeductiion) +
      parseInt(formData.dearnessAllowance);
    setDeduction(deductionTotal);
  };

  const netSalary = () => {
    let netTotal = grossSal - deduction;
    setNetAmount(netTotal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        <TextField
          margin="dense"
          label="Basic Salery"
          type="number"
          fullWidth
          name="basicSalery"
          id="basicSalery"
          value={formData.basicSalary}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          style={{ margin: "8px 3px" }}
        />
        <TextField
          margin="dense"
          label="House Rent Allowance"
          type="number"
          fullWidth
          name="houseRentAllowance"
          id="houseRentAllowance"
          value={formData.houseRentAllowance}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: "8px 3px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          margin="dense"
          label="Medical Allowance"
          type="number"
          fullWidth
          name="medicalAllowance"
          id="medicalAllowance"
          value={formData.medicalAllowance}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          style={{ margin: "8px 3px" }}
        />
        <TextField
          margin="dense"
          label="PF Allowance"
          type="number"
          fullWidth
          name="pfAllowance"
          id="pfAllowance"
          value={pfVal}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled
          style={{ margin: "8px 3px" }}
        />

        <TextField
          margin="dense"
          label="Travelling/Transport Allowance"
          type="number"
          fullWidth
          name="transportAllowance"
          id="transportAllowance"
          value={formData.transportAllowance}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          style={{ margin: "8px 3px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          margin="dense"
          label="Tax Deduction"
          type="number"
          fullWidth
          name="taxDeductiion"
          id="taxDeductiion"
          value={formData.taxDeductiion}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: "8px 3px" }}
        />
        <TextField
          margin="dense"
          label="Dearness Allowance"
          type="number"
          fullWidth
          name="dearnessAllowance"
          id="dearnessAllowance"
          value={formData.dearnessAllowance}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          style={{ margin: "8px 3px" }}
        />
        <TextField
          margin="dense"
          label="Gross Salary"
          type="number"
          fullWidth
          name="grossSalary"
          id="grossSalary"
          value={grossSal}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
          style={{ margin: "2px 3px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          margin="dense"
          label="Total Deduction"
          type="number"
          fullWidth
          name="totalDeduction"
          id="totalDeduction"
          value={deduction}
          disabled
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          style={{ margin: "4px 3px", width: "365px" }}
        />
        <TextField
          margin="dense"
          label="Net Salary"
          type="number"
          fullWidth
          name="netSalary"
          id="netSalary"
          value={netAmount}
          disabled
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: "4px 3px", width: "365px" }}
        />
        <TextField
          margin="dense"
          label="Payroll Template(e.g CEO/MANAGER/EMPLOYEE)"
          type="text"
          fullWidth
          name="payrollTemplate"
          id="payrollTemplate"
          value={formData.payrollTemplate}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: "4px 3px", width: "365px" }}
        />
        <TextField
          margin="dense"
          label="Created Date"
          type="date"
          fullWidth
          name="createdDate"
          id="createdDate"
          value={formData.createdDate}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: "4px 3px", width: "365px" }}
          InputLabelProps={{shrink:true}}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Button
          type="submit"
          onClick={saveSalaryTemplate}
          style={{
            background: "linear-gradient(to right, #1cb5e0, #000046)",
            height: "35px",
            width: "700px",
            color: "white",
            margin: "0 5px",
          }}
          variant="outlined"
        >
          Submit
        </Button>
        <Button
          onClick={"/payroll"}
          style={{
            background: "linear-gradient(to left, #1cb5e0, #000046)",
            height: "35px",
            width: "700px",
            color: "white",
            margin: "0 5px",
          }}
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default DepartmentForm;
