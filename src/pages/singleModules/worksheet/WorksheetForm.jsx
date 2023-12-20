import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateWorksheet from "./StateWorksheet";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const WorksheetForm = () => {
  const navigate = useNavigate();

  const {
    formData,
    setFormData,
    setWorksheet,
    setDescription,
    setFormVisible,
    project,
    setProject,
    setEmployeeName,
    dateError,
    setDateError,
  } = StateWorksheet();

  const loadWorksheet = async () => {
    const result = await api.loadWorksheet();
    setWorksheet(result);
  };

  useEffect(() => {
    loadWorksheet();
    fetchProjects();
    fetchEmployee();
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handledesChange = (e) => {
    setDescription(e.target.value);
  };
  const enforceMaxLength = (value, maxLength) => {
    return value.slice(0, maxLength);
  };

  const handleWorkSheetTitleChange = (e) => {
    const value = enforceMaxLength(e.target.value, 100);
    setFormData({
      ...formData,
      workSheetTitle: value,
    });
  };

  const isSubjectValid = () => {
    const { workSheetTitle } = formData;
    return (
      /^[A-Za-z]+$/.test(workSheetTitle) &&
      workSheetTitle.length >= 2 &&
      workSheetTitle.length <= 50
    );
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

  const saveWorksheet = async () => {
    await api.saveWorksheet(formData);
    alert("Worksheet added successfully");
    navigate("/worksheet");
    setFormData({
      workSheetTitle: "",
      startDate: "",
      endDate: "",
      estimatedHour: "",
      project: "",
      employeeName: "",
      assignedTo: "",
      description: "",
      taskName: "",
      challengepart: "",
      workProgress: "",
      createdDate: "",
    });
  };

  const handleSubmit = (e) => {
    loadWorksheet();
  };

  const fetchProjects = async () => {
    const projectsData = await api.fetchProjects();
    setProject(projectsData);
  };

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployeeName(employeeData);
  };

  const Work = [
    {
      value: "Choose",
      label: "Select progress",
    },
    {
      value: "Incomplete",
      label: "Incomplete",
    },
    {
      value: "Complete",
      label: "Complete",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          name="workSheetTitle"
          id="workSheetTitle"
          value={formData.workSheetTitle}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!isSubjectValid()}
          helperText={
            !isSubjectValid()
              ? "Subject length should be between 2 and 50 characters."
              : ""
          }
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleWorkSheetTitleChange(e);
          }}
        />

        <TextField
          margin="dense"
          type="date"
          fullWidth
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          type="date"
          fullWidth
          name="endDate"
          id="endDate"
          value={formData.endDate}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="Estimated Hour"
          type="text"
          fullWidth
          name="estimatedHour"
          id="estimatedHour"
          value={formData.estimatedHour}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <FormControl fullWidth>
          <InputLabel id="demo-worksheet-select-label">Project Name</InputLabel>
          <Select
            labelId="demo-worksheet-select-label"
            id="selectedEmployee"
            value={formData.project}
            name="project"
            label="Project"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {project.map((item, index) => {
              return (
                <MenuItem key={index} value={item.project}>
                  {item.project}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          label="Assigned To"
          type="text"
          fullWidth
          name="assignedTo"
          id="assignedTo"
          value={formData.assignedTo}
          onChange={(e) => handleInputChange(e)}
          required
        />
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
            handledesChange(e);
          }}
        />

        <TextField
          margin="dense"
          label="Task Name"
          type="text"
          fullWidth
          name="taskName"
          id="taskName"
          value={formData.taskName}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Challenge Part"
          type="text"
          fullWidth
          name="challengepart"
          id="challengepart"
          value={formData.challengepart}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          id="workProgress"
          margin="dense"
          select
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.workProgress}
          onChange={(e) => handleInputChange(e)}
          name="workProgress"
        >
          {Work.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
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
          error={dateError}
          helperText={dateError ? "Please select the current date" : ""}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn"
          variant="outlined"
          type="submit"
          onClick={saveWorksheet}
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

export default WorksheetForm;
