import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateEmployeeExit from "./StateEmployeeExit";

const EmployeeExitForm = ({formData,setFormData,setOpen}) => {
  const navigate = useNavigate();

  const {
    descriptionError,
    setDescriptionError,
    employee,
    setEmployee,
    formVisible,
    setFormVisible,
    employeeExit,
    setEmployeeExit,
    search,
    setSearch,
    open,
    recDelete,
    setRecDelete,
    dateError,
    setDateError,
    employeeUserNameError, setEmployeeUserNameError
  } = StateEmployeeExit();

  const loadEmployeeExit = async () => {
    const result = await api.loadEmployeeExit();
    setEmployeeExit(result);
  };

  useEffect(() => {
    loadEmployeeExit();
    fetchEmployee();
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "exitDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "description") {
      const isValidSubject =
        value.length >= 2 && value.length <= 100 && /^[a-zA-Z\s]+$/.test(value);
      setDescriptionError(!isValidSubject);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: value,
    });
  };

  const saveEmployeeExit = async (e) => {
    await api.saveEmployeeExit(formData);
    handleClose();
    navigate("/employee/employee-exit");
    loadEmployeeExit();
    setFormData({
      employeeToExit: "",
      exitDate: "",
      typeOfExit: "",
      exitInterview: "",
      inactivateEmployeeAccount: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    loadEmployeeExit();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const Type = [
    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];

  const TypeAcc = [
    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];

  const TyepExit = [
    {
      value: "Choose",
      label: "Type Of Exit",
    },
    {
      value: "Resignation",
      label: "Resignation",
    },
    {
      value: "Retirement",
      label: "Retirement",
    },
    {
      value: "Termination",
      label: "Termination",
    },
    {
      value: "Contract Completion",
      label: "Contract Completion",
    },
    {
      value: "Contract Completion",
      label: "Contract Completion",
    },
    {
      value: "Career Break",
      label: "Career Break",
    },

    {
      value: "Project Completion",
      label: "Project Completion",
    },

    {
      value: "Transfer",
      label: "Transfer",
    },
  ];

  const cancelButton = ()=>
  {
    setOpen(false);
    setFormData({
      employeeToExit: "",
      exitDate: "",
      typeOfExit: "",
      exitInterview: "",
      inactivateEmployeeAccount: "",
      description: "",
      });
    };
    
    let buttonClick = formData.employeeToExit.length>0 &&
    formData.exitDate.length>0 &&
    formData.typeOfExit.length>0 &&
    formData.exitInterview.length>0 &&
    formData.inactivateEmployeeAccount.length>0 &&
    formData.description.length>0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          id="employeeToExit"
          select
          margin="dense"
          label="Employee to exit"
          fullWidth
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          value={formData.employeeToExit}
          onChange={(e) => handleInputChange(e)}
          name="employeeToExit"
          InputLabelProps={{shrink:true}}
        >
          {employee.map((option, index) => (
            <option key={index} value={option.employeeName}>
              {option.employeeName}
            </option>
          ))}
        </TextField>
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Exit Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name="exitDate"
          id="exitDate"
          value={formData.exitDate}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          id="typeOfExit"
          margin="dense"
          select
          label="Type of Exit"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.typeOfExit}
          onChange={(e) => handleInputChange(e)}
          name="typeOfExit"
        >
          {TyepExit.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      </div>
      <div className="data-input-fields">
        <TextField
          id="exitInterview"
          margin="dense"
          select
          label="Exit Interview"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.exitInterview}
          onChange={(e) => handleInputChange(e)}
          name="exitInterview"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="inactivateEmployeeAccount"
          margin="dense"
          select
          label="Inactivate Employee Account"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.inactivateEmployeeAccount}
          onChange={(e) => handleInputChange(e)}
          name="inactivateEmployeeAccount"
        >
          {TypeAcc.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      </div>
      <TextField
        margin="dense"
        label="Description"
        type="text"
        fullWidth
        name="description"
        id="description"
        value={formData.description}
        onChange={(e) => handleInputChange(e)}
        required
        error={descriptionError}
        helperText={
          descriptionError &&
          "Please enter a description between 2 and 100 characters."
        }
      />
      <div className="data-buttons">
        <DialogActions className="dialog">
          <Button
            id="input-btn-submit-popup"
            type="submit"
            onClick={saveEmployeeExit}
            variant="outlined"
            disabled={buttonClick? false : true}
          >
            Submit
          </Button>
          <Button
            id="input-btn-cancel-popup"
            onClick={cancelButton}
            variant="outlined"
          >
            Cancel
          </Button>
        </DialogActions>
      </div>
    </form>
  );
};

export default EmployeeExitForm;
