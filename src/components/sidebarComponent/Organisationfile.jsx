import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrganisationLogo from "../../asset/24px/Organisation.png"

const Organisationfile = () => {
  const [dropdown, setDropdown] = useState("org-dropdown");
  const handleOrgclick = () => {
    if (dropdown === "org-dropdown") {
      setDropdown("org-open");
    } else {
      setDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
    <div className="logo-text-p" onClick={handleOrgclick}>
    <span></span>
      <img src={OrganisationLogo} alt="Organisation"/>
      <p id="dropdown">
        Organisation<i class='bx bx-chevron-down'></i>
      </p>
    </div>
    <div className="mobile-logo-text-p" onClick={handleOrgclick}>
    <span></span>
      <img src={OrganisationLogo} alt="Organisation"/>
     
    </div>
      <div className={dropdown}>
        <p onClick={() => navigation("/organisation/company")}>Company</p>

        <p onClick={() => navigation("/organisation/location")}>Location</p>

        <p onClick={() => navigation("/organisation/department")}>Department</p>

        <p onClick={() => navigation("/organisation/designation")}>
          Designation
        </p>

        <p onClick={() => navigation("/organisation/policies")}>Policies</p>

        <p onClick={() => navigation("/organisation/announcements")}>
          Announcements
        </p>

        <p onClick={() => navigation("/organisation/expences")}>Expenses</p>
      </div>
    </div>
  );
};

export default Organisationfile;
