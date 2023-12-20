import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import AdvanceSalaryView from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryView";
import AdvanceSalaryEdit from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryEdit";
import SalaryTemplateView from "../payroll/Salarytemplate/Mainfile/SalaryTemplateView";
const RoutingProject = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/payroll/advanceSalary" exact element={<AdvanceSalaryView/>} />
          <Route path="/payroll/edit-advanceSalary" exact element={<AdvanceSalaryEdit/>} />
          <Route path="/payroll/sakaryTemplate" exact element={<SalaryTemplateView/>} />

        </Routes>
      </div>
    </div>
  );
};

export default RoutingProject;
