import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import CompanyLogoFile from "./CompanyLogoFile";
import MainFile from "./MainFile";

const Dashboard = () => {
  return (
    <div>
    <div id="header-container" className="header-container">
    <CompanyLogoFile />
      <Header />
    </div>
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">
          <MainFile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

