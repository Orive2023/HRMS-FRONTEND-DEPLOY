import React from "react";
import { Route, Routes } from "react-router-dom";
import AwardsView from "./awards/Mainfile/AwardView";
import ComplaintView from "./complaints/Mainfile/ComplaintView"
import EmployeeExitView from "./employeeexit/Mainfile/EmployeeExitView"
import EmployeeView from "./employees/Mainfile/EmployeeView";
import PromotionView from "./promotions/Mainfile/PromotionView"
import ResignationView from "./resignation/mainfile/ResignationView"
import TerminationView from "./termination/mainfile/TerminationView"
import TransferView from "./transfers/mainfile/TransferView"
import TravelView from "./travels/mainfile/TravelView"
import WarningView from "./warnings/Mainfile/WarningView"

const routesData = [
  { path: "/employee/awards", element: <AwardsView /> },
  { path: "/employee/complaints", element: <ComplaintView /> },
  { path: "/employee/employee-exit", element: <EmployeeExitView /> },
  { path: "/employee/employee", element: <EmployeeView /> },
  { path: "/employee/promotions", element: <PromotionView /> },
  { path: "/employee/resignation", element: <ResignationView /> },
  { path: "/employee/termination", element: <TerminationView /> },
  { path: "/employee/transfer", element: <TransferView /> },
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

