import React from "react";
import { Route, Routes } from "react-router-dom";

import BalanceView from "./Mainfile/BalanceView";

const RoutingBalance = () => {
  return (
    <div>
      <Routes>
        <Route path={"/accounts/openingbalance"} element={<BalanceView/>} />
       
      </Routes>
    </div>
  );
};

export default RoutingBalance;