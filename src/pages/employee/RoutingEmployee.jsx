import React from "react";
import { Route, Routes } from "react-router-dom";
import AwardsView from "./awards/Mainfile/AwardView";
import EditAward from "./awards/Mainfile/EditAward";
import ComplaintView from "./complaints/Mainfile/ComplaintView";
import EmployeeExitView from "./employeeexit/Mainfile/EmployeeExitView";
import EditEmployeeExit from "./employeeexit/Mainfile/EditEmployeeExit";
import EmployeeView from "./employees/Mainfile/EmployeeView";
import PromotionView from "./promotions/Mainfile/PromotionView";
import ResignationView from "./resignation/mainfile/ResignationView"
import EditResignation from "./resignation/mainfile/EditResignation"
import TerminationView from "./termination/mainfile/TerminationView"
import EditTermination from "./termination/mainfile/EditTermination"
import TransferView from "./transfers/mainfile/TransferView"
import EditTransfer from "./transfers/mainfile/EditTransfer"
import TravelView from "./travels/mainfile/TravelView"
import WarningView from "./warnings/Mainfile/WarningView"

const routesData = [
  { path: "/employee/awards", element: <AwardsView /> },
  { path: "/employee/edit-awards/:id", element: <EditAward /> },
  { path: "/employee/complaints", element: <ComplaintView /> },
  { path: "/employee/employee-exit", element: <EmployeeExitView /> },
  { path: "/employee/edit-employee-exit/:id", element: <EditEmployeeExit /> },
  { path: "/employee/employee", element: <EmployeeView /> },
  { path: "/employee/promotions", element: <PromotionView /> },
  { path: "/employee/resignation", element: <ResignationView /> },
  { path: "/employee/edit-resignation/:id", element: <EditResignation /> },
  { path: "/employee/termination", element: <TerminationView /> },
  { path: "/employee/edit-termination/:id", element: <EditTermination/> },
  { path: "/employee/transfer", element: <TransferView /> },
  { path: "/employee/edit-transfer/:id", element: <EditTransfer /> },
  { path: "/employee/travel", element: <TravelView /> },
  { path: "/employee/warning", element: <WarningView /> },
];

const RoutingOrganisation = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          {routesData.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default RoutingOrganisation;

