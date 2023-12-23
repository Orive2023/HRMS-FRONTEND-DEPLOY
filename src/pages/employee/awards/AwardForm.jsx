import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateAward from "./StateAward";

const AwardForm = ({ formData, setFormData, setOpen }) => {
  const navigate = useNavigate();

  const {
    setGiftName,
    errorGiftName,
    setErrorGiftName,
    setAwardName,
    setEmployeeName,
    setAward,
    setDateError,
    setLocation,
    setCompany,
   
    
    setClientName,
    setProjectManager,
    setDescription,
    
    setSummary,
    errorAwardMsg,
    setAwardErrorMsg,
    errorMsg,
    setErrorMsg,
  } = StateAward();

  const loadAward = async () => {
    const result = await api.loadAward();
    setAward(result);
  };

  useEffect(() => {
    loadAward();
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

  const handleManualEntryChange = (e) => {
    setFormData({
      ...formData,
      manualCompanyName: e.target.value,
    });
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
  const handleClose =() =>{
    setOpen(false);
  };
  const handleGiftChange = (e) => {
    const valueGift = e.target.value;
    if (valueGift.length < 2 || valueGift.length > 50) {
      setErrorGiftName(" Name length should be between 2 and 50.");
    } else {
      setErrorGiftName("");
    }
    setGiftName(e.target.value);
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

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(1, maxLength);
  };

  const maxLengthAward = (valueAward, maxLength) => {
    return valueAward.length <= maxLength
      ? valueAward
      : valueAward.slice(1, maxLength);
  };
  const maxLengthGift = (valueGift, maxLength) => {
    return valueGift.length <= maxLength
      ? valueGift
      : valueGift.slice(1, maxLength);
  };

  const saveAward = async () => {
    await api.saveAward(formData);
    navigate("/employee/awards");
    setFormData({
      awardName: "",
      awardDescription: "",
      giftItem: "",
      date: "",
      employeeName: "",
      awardBy: "",
      })
  };


  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length < 2 || value.length > 50) {
      setErrorMsg(" Name length should be between 2 and 50.");
    } else {
      setErrorMsg("");
    }
    setEmployeeName(e.target.value);
  };

  const handleAwardChange = (e) => {
    const valueAward = e.target.value;
    if (valueAward.length < 2 || valueAward.length > 50) {
      setAwardErrorMsg(" Name length should be between 2 and 50.");
    } else {
      setAwardErrorMsg("");
    }
    setAwardName(e.target.value);
  };

  
  const handleSubmit = (e) => {
    
    handleClose();
  };

  const fetchCompany = async () => {
    const companyData = await api.fetchCompanies();
    setCompany(companyData);
  };

  const fetchLocation = async () => {
    const locationData = await api.fetchLocations();
    setLocation(locationData);
  };


  const handleProjChange = (e) => {
    setProjectManager(e.target.value);
  };

  const handleClientChange = (e) => {
    setClientName(e.target.value);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSumChange = (e) => {
    setSummary(e.target.value);
  };
  const cancelButton = ()=>
  {
    setOpen(false);
    setFormData({
      awardName: "",
      awardDescription: "",
      giftItem: "",
      date: "",
      employeeName: "",
      awardBy: "",
      });
    };
    
    let buttonClick = formData.awardName.length>0 &&
    formData.awardDescription.length>0 &&
    formData.giftItem.length>0 &&
    formData.date.length>0 &&
    formData.employeeName.length>0 &&
    formData.awardBy.length>0;

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Employee name"
          type="text"
          fullWidth
          name="employeeName"
          id="employeeName"
          value={formData.employeeName}
          onChange={(e) => handleInputChange(e)}
          required
          error={errorMsg !== ""}
          helperText={errorMsg}
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 50);
            handleNameChange(e);
          }}
        />
        <TextField
          margin="dense"
          label="Awards Name"
          type="text"
          fullWidth
          name="awardName"
          id="awardName"
          value={formData.awardName}
          onChange={(e) => handleInputChange(e)}
          required
          error={errorAwardMsg !== ""}
          helperText={errorAwardMsg}
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          onInput={(e) => {
            e.target.value = maxLengthAward(e.target.value, 50);
            handleAwardChange(e);
          }}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Gift name"
          type="text"
          fullWidth
          name="giftItem"
          id="giftItem"
          value={formData.giftItem}
          onChange={(e) => handleInputChange(e)}
          required
          error={errorGiftName !== ""}
          helperText={errorGiftName}
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          onInput={(e) => {
            e.target.value = maxLengthGift(e.target.value, 50);
            handleGiftChange(e);
          }}
        />

        <TextField
          margin="dense"
          label="Award Description"
          type="text"
          fullWidth
          name="awardDescription"
          id="awardDescription"
          value={formData.awardDescription}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          type="date"
          label="Awards Date"
          fullWidth
          name="date"
          id="date"
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          type="text"
          label="awards By"
          fullWidth
          name="awardBy"
          id="awardBy"
          value={formData.awardBy}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn"
          variant="outlined"
          type="submit"
          onClick={saveAward}
          disabled={buttonClick? false : true}
        >
          Submit
        </Button>
        <Button
          id="input-btn"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AwardForm;
