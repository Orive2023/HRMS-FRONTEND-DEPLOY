import React from "react";
import { Route, Routes } from "react-router-dom";
import AdvanceSalaryView from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryView";
import AdvanceSalaryEdit from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryEdit";
import SalaryTemplateView from "../payroll/Salarytemplate/Mainfile/SalaryTemplateView";
const RoutingProject = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/payroll/advance-Salary" exact element={<AdvanceSalaryView/>} />
          <Route path="/payroll/edit-advance-Salary" exact element={<AdvanceSalaryEdit/>} />
          <Route path="/payroll/salary-template" exact element={<SalaryTemplateView/>} />
        </Routes>
      </div>
    </div>
  );
};

export default RoutingProject;
