import React from "react";
import { Route, Routes } from "react-router-dom";
import AttendanceView from "../Attendance/mainfile/AttendanceView";

const routesData = [
  
  { path: "/Attendance/attendanceView", element: <AttendanceView /> },
];

const RoutingAttendance = () => {
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

export default RoutingAttendance;

