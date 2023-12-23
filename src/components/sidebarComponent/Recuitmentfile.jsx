import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequirementLogo from "../../asset/24px/Recruitment.png";

const Recuitmentfile = () => {
  const [reqDropdown, setReqDropdown] = useState("org-dropdown");
  const handleReqclick = () => {
    if (reqDropdown === "org-dropdown") {
      setReqDropdown("org-open");
    } else {
      setReqDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleReqclick}>
      <span></span>
        <img src={RequirementLogo} alt="Requirement" />
        <p id="dropdown">
          Recruitment<i class='bx bx-chevron-down'></i>
        </p>
      </div>
      <div className={reqDropdown}>
        <p onClick={() => navigation("/recruitment/job-posts")}>Job Posts</p>
        <p onClick={() => navigation("/recruitment/job-listing-frontend")}>
          Job Listing Frontend
        </p>
        <p onClick={() => navigation("/recruitment/job-candidates")}>
          Job Candidates
        </p>
        <p onClick={() => navigation("/recruitment/job-interview")}>
          Job Interviews
        </p>
      </div>
    </div>
  );
};

export default Recuitmentfile;
