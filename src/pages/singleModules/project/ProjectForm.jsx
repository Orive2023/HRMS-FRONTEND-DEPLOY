import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateProject from "./StateProject";

const ProjectForm = ({ formData, setFormData,setFormVisible,setToggle }) => {
  const navigate = useNavigate();

  const {
    setClientName,
    setProjectManager,
    setDescription,
    setSummary,
    company,
    setDateError,
    setProject,setCompany
  } = StateProject();
  const loadProject = async () => {
    const result = await api.loadProject();
    setProject(result);
  };

  useEffect(() => {
    loadProject();
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

  const saveProject = async () => {
    await api.saveProject(formData);
    navigate("/project");
    setFormData({
      projectTitle: "",
      clientName: "",
      companyName: "",
      startDate: "",
      endDate: "",
      projectManagers: "",
      priority: "",
      description: "",
      summary: "",
    })
  }

  const fetchCompany = async () => {
    const response = await api.fetchCompanies();
    console.log("first",response)
    setCompany(response);

};

useEffect(() => {
  fetchCompany();
}, []);

    const handleSubmit = (e) => {
      
    };


    const enforceMaxLength = (value, maxLength) => {
      return value.length <= maxLength ? value : value.slice(0, maxLength);
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

    let buttonCheck = (formData.projectTitle.length>0 && formData.clientName.length>0 && formData.companyName.length>0 && formData.startDate.length>0 && formData.endDate.length>0 && formData.projectManagers.length>0 && formData.priority.length>0 && formData.description.length>0 && formData.summary.length>0 && formData.budget.length>0)

    const cancelButton = () => {
      setFormVisible(false)
      setToggle(false)
      setFormData({
        projectTitle: "",
        clientName: "",
        companyName: "",
        startDate: "",
        endDate: "",
        projectManagers: "",
        priority: "",
        description: "",
        summary: "",
        budget:""
      })
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="data-input-fields">
            <TextField
              margin="dense"
              label="Project Title"
              type="text"
              fullWidth
              name="projectTitle"
              id="projectTitle"
              value={formData.projectTitle}
              onChange={(e) => handleInputChange(e)}
              required
              InputProps={{
                minLength: 2, // Set your minimum length here
                maxLength: 200, // Set your maximum length here
              }}
              onInput={(e) => {
                e.target.value = enforceMaxLength(e.target.value, 200);
                handleProjChange(e);
              }}
            />

            <TextField
              margin="dense"
              label="Client Name"
              type="text"
              fullWidth
              name="clientName"
              id="clientName"
              value={formData.clientName}
              onChange={(e) => handleInputChange(e)}
              required
              InputProps={{
                minLength: 2, // Set your minimum length here
                maxLength: 50, // Set your maximum length here
              }}
              onInput={(e) => {
                e.target.value = enforceMaxLength(e.target.value, 50);
                handleClientChange(e);
              }}
            />
          </div>

          <div className="data-input-fields">
            <FormControl fullWidth>
              <InputLabel id="demo-company-select-label">
                Company Name
              </InputLabel>
              <Select
                labelId="demo-company-select-label"
                id="selectedCompany"
                value={formData.companyName}
                name="companyName"
                label="Company Name"
                onChange={(e) => handleInputChange(e)}
                // required
              >
                {company.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.companyName}>
                      {item.companyName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              type="date"
              label="Start Date"
              fullWidth
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={(e) => handleInputChange(e)}
              required
              InputProps={{
                min: "2022-01-01", // set your minimum date here
                max: "2023-12-31", // set your maximum date here
              }}
              InputLabelProps={{shrink:true}}
            />
            <TextField
              margin="dense"
              type="date"
              label="End Date"
              fullWidth
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={(e) => handleInputChange(e)}
              required
              InputProps={{
                min: "2022-01-01", // set your minimum date here
                max: "2023-12-31", // set your maximum date here
              }}
              InputLabelProps={{shrink:true}}
            />
          </div>

          <div className="data-input-fields">
            <TextField
              margin="dense"
              label="Project Manager"
              type="text"
              fullWidth
              name="projectManagers"
              id="projectManagers"
              value={formData.projectManagers}
              onChange={(e) => handleInputChange(e)}
              required
              InputProps={{
                minLength: 2, // Set your minimum length here
                maxLength: 60, // Set your maximum length here
              }}
              onInput={(e) => {
                e.target.value = enforceMaxLength(e.target.value, 60);
                handleProjChange(e);
              }}
            />

            <TextField
              margin="dense"
              label="Budget"
              type="number"
              fullWidth
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange(e)}
              required
             
            />
            <TextField
              id="priority"
              margin="dense"
              select
              //  label="Priority"
              // type="text"
              fullWidth
              defaultValue="Choose"
              SelectProps={{
                native: true,
              }}
              value={formData.priority}
              onChange={(e) => handleInputChange(e)}
              name="priority"
            >
              {Type.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div className="data-input-fields">
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
              InputProps={{
                minLength: 2, // Set your minimum length here
                maxLength: 500, // Set your maximum length here
              }}
              onInput={(e) => {
                e.target.value = enforceMaxLength(e.target.value, 500);
                handleChange(e);
              }}
            />
            <TextField
              margin="dense"
              label="Summary"
              type="text"
              fullWidth
              name="summary"
              id="summary"
              value={formData.summary}
              onChange={(e) => handleInputChange(e)}
              required
              InputProps={{
                minLength: 2, // Set your minimum length here
                maxLength: 300, // Set your maximum length here
              }}
              onInput={(e) => {
                e.target.value = enforceMaxLength(e.target.value, 300);
                handleSumChange(e);
              }}
            />
          </div>

          <div className="data-buttons">
            <Button
              id="input-btn"
              variant="outlined"
              type="submit"
              onClick={saveProject}
              disabled={buttonCheck ? false : true}
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
      </div>
    );
  };


export default ProjectForm;
