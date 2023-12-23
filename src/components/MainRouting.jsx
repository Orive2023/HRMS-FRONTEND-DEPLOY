import React from "react";
import RoutingOrganisation from "../pages/oganisation/RoutingOrganisation";
import RoutingPerformance from "../pages/performance/RoutingPerformance";
import RoutingSingleModules from "../pages/singleModules/RoutingSingleModules";
import RoutingPayroll from "../pages/singleModules/RoutingSingleModules";
import RoutingEmployee from "../pages/employee/RoutingEmployee"
import RoutingAttendance from "../pages/Attendance/RoutingAttendance";
import RoutingLeave from "../pages/leave/RoutingLeave";

const MainRouting = () => {
  return (
    <div className="main-container">
      <RoutingOrganisation />
      <RoutingPerformance/>
      <RoutingSingleModules/>
      <RoutingPayroll/>
      <RoutingEmployee />
      <RoutingAttendance/>
      <RoutingLeave/>
    </div>
  );
};

export default MainRouting;
