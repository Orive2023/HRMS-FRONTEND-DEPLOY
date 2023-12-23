import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import LeaveView from "./Mainfile/LeaveView";
import LeaveEdit from "./Mainfile/LeaveEdit";

const routesData = [
  { path: "/timesheets/leaves", element: <LeaveView /> },
  { path: "/timesheets/edit-Leave/:id", element: <LeaveEdit /> },
];

const RoutingLeave = () => {
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

export default RoutingLeave;
