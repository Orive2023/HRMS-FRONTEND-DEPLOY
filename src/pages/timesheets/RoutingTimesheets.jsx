import React from "react";
import { Route, Routes } from "react-router-dom";
import LeaveView from "../timesheets/leave/Mainfile/LeaveView";
import LeaveEdit from "../timesheets/leave/Mainfile/LeaveEdit";

import HolidayView from "./Holiday/Mainfile/HolidayView";
import EditHoliday from "../timesheets/Holiday/Mainfile/EditHoliday"

import AttendanceView from "./Attendance/mainfile/AttendanceView";

const routesData = [
  { path: "/timesheets/leaves", element: <LeaveView /> },
  { path: "/timesheets/leave/edit-Leave/:id", element: <LeaveEdit /> },
  { path: "/timesheets/holiday", element: <HolidayView /> },
  { path: "/timesheets/edit-holiday/edit-holiday/:id", element: <EditHoliday /> },
  { path: "/timesheets/attendance", element: <AttendanceView /> },
];

const RoutingTimesheets = () => {
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

export default RoutingTimesheets;