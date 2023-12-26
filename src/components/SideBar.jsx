import React from "react";

import DashboardFile from "./sidebarComponent/DashboardFile";
import Organisationfile from "./sidebarComponent/Organisationfile";
import EmployeesFile from "./sidebarComponent/EmployeesFile";
import PerformanceFile from "./sidebarComponent/PerformanceFile";
import TimesheetsFile from "./sidebarComponent/TimesheetsFile";
import PayrollFile from "./sidebarComponent/PayrollFile";
import ProjectsFile from "./sidebarComponent/ProjectsFile";
import TicketsFile from "./sidebarComponent/TicketsFile";
import WorksheetsFile from "./sidebarComponent/Worksheetsfile";
import Bankfile from "./sidebarComponent/Bankfile";
import Loanfile from "./sidebarComponent/Loanfile";
import Accountfile from "./sidebarComponent/Accountfile";
import ProcurementFile from "./sidebarComponent/ProcurementFile";
import Recuitmentfile from "./sidebarComponent/Recuitmentfile";
import Trainingfile from "./sidebarComponent/Trainingfile";
import { useNavigate } from "react-router-dom/dist";

const SideBar = () => {
  const navigation = useNavigate()
  return (
    <>
    <div className="sidebar-btn-container">
    <div className="sidebar-container">
        <DashboardFile />
        <Organisationfile />
        <EmployeesFile />
        <PerformanceFile />
        <TimesheetsFile />
        <PayrollFile />
        <ProjectsFile />
        <TicketsFile />
        <WorksheetsFile />
        <Bankfile />
        <Loanfile />
        <Accountfile />
        <ProcurementFile />
        <Recuitmentfile />
        <Trainingfile />
      </div>
    {/* <div id="logout-hrms-btn" className="logout-hrms-btn"> */}
          <button id="logout-hrms-btn" onClick={() => navigation("/")}>Logout<i class='bx bx-log-out'></i></button>
          <button id="icon-logout-hrms-btn" onClick={() => navigation("/")}><i class='bx bx-log-out'></i></button>
         {/* </div> */}
    </div>
    
    </>
  );
};

export default SideBar;
