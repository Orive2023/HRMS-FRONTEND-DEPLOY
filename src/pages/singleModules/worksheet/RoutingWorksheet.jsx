import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import WorksheetView from "../worksheet/Mainfile/WorkSheetView";


const RoutingWorksheet = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/worksheet" exact element={<WorksheetView />} />
        </Routes>
      </div>
    </div>
  );
};

export default RoutingWorksheet;
