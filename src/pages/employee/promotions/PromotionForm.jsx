import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StatePromotion from "./StatePromotion";

const PromotionForm = () => {
  const navigate = useNavigate();

  const {
    formData,
    setPromotion,
    formVisible,
    toggle,
    titleError,
    setTitleChange,
    setTitle,
    setTitleError,
    setEmployee,
    employee,
    setToggle,
    descriptionError,
    setDescriptionError,
    setFormVisible,
    setFormData,
    description,
    setDescription,
    company,
    setLocation,
    setDateError,
    setCompany,
    setFormErrors,
  } = StatePromotion();

  const loadPromotion = async () => {
    const result = await api.loadPromotion();
    setPromotion(result);
  };

  const validateInput = (value, setValue, setError, fieldName) => {
    const isValid =
      value.length >= 2 && value.length <= 100 && /^[a-zA-Z\s]+$/.test(value);
    setError(
      isValid
        ? ""
        : `${fieldName} must be between 2 and 100 charactersand only alphabets must be used`
    );
    setValue(value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    validateInput(
      e.target.value,
      setDescription,
      setDescriptionError,
      "Description"
    );
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    validateInput(e.target.value, setTitle, setTitleError, "Title");
  };

  useEffect(() => {
    loadPromotion();
    //fetchCompany();
    //fetchLocation();
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
    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: value,
    });
  };

  const Type = [
    {
      value: "Choose",
      label: "Select Priority",
    },
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "High",
      label: "High",
    },
  ];

  const savePromotion = async () => {
    await api.savePromotion(formData);
    navigate("/employee/promotions");

    setFormData({
      employeeName: "",
      promotionTitle: "",
      promotionDate: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    loadPromotion();
  };

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const validateForm = () => {
    const errors = {};
    let formIsValid = true;

    // Check if required fields are filled in
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (!formData[key]) {
          errors[key] = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } is required.`;
          formIsValid = false;
        } else {
          errors[key] = "";
        }
      }
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Promotion For"
          type="text"
          fullWidth
          name="employeeName"
          id="employeeName"
          value={formData.employeeName}
          onChange={(e) => handleInputChange(e)}
          required
          select
        >
          {employee.map((option, index) => (
            <option key={index} value={option.employeeName}>
              {option.employeeName}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Promotion title"
          type="text"
          fullWidth
          name="promotionTitle"
          id="promotionTitle"
          value={formData.promotionTitle}
          onChange={(e) => {
            handleTitleChange(e);
            handleInputChange(e);
          }}
          required
          error={!!titleError}
          helperText={titleError}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleTitleChange(e);
          }}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Promotion Date"
          type="date"
          fullWidth
          name="promotionDate"
          id="promotionDate"
          value={formData.promotionDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          name="description"
          id="description"
          value={formData.description}
          onChange={(e) => {
            handleDescriptionChange(e);
            handleInputChange(e);
          }}
          required
          error={!!descriptionError}
          helperText={descriptionError}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleDescriptionChange(e);
          }}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn"
          variant="outlined"
          type="submit"
          onClick={savePromotion}
        >
          Submit
        </Button>
        <Button
          id="input-btn"
          variant="outlined"
          onClick={() => setFormVisible(false)}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default PromotionForm;