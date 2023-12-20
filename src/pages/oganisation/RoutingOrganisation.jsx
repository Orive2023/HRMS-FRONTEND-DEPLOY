import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import CompanyView from "./company/Mainfile/CompanyView";
import LocationView from "./location/Mainfile/LocationView";
import EditLocation from "./location/Mainfile/EditLocation";

import DepartmentView from "./department/Mainfile/DepartmentView";
import DesignationView from "./designation/Mainfile/DesignationView";
import EditDesignation from "./designation/Mainfile/EditDesignation";

import PoliciesView from "./Policies/Mainfile/PoliciesView";
import AnnouncementsView from "./announcements/Mainfile/AnnouncementsView";
import ExpensesView from "./expences/Mainfile/ExpensesView";
import DepartmentProfile from "./department/Mainfile/DepartmentProfile";
import EditDepartment from "./department/Mainfile/EditDepartment";
import EditExpenses from "./expences/Mainfile/EditExpenses";
import ExpensesProfile from "./expences/Mainfile/ExpensesProfile";
import EditPolicies from "./Policies/Mainfile/EditPolicies";
import PoliciesProfile from "./Policies/Mainfile/PoliciesProfile";
import EditAnnouncements from "./announcements/Mainfile/EditAnnnouncements";
import AnnouncementsProfile from "./announcements/Mainfile/AnnouncementsProfile";
import EditCompany from "./company/Mainfile/EditCompany";
import CompanyPofile from "./company/Mainfile/CompanyPofile";

const routesData = [
  { path: "/", element: <Dashboard /> },
  { path: "/organisation/company", element: <CompanyView /> },
  { path: "/organisation/company-profile/:id", element: <CompanyPofile /> },
  { path: "/organisation/edit-company/:id", element: <EditCompany /> },
  {
    path: "/organisation/department-profile/:id",
    element: <DepartmentProfile />,
  },
  { path: "/organisation/edit-department/:id", element: <EditDepartment /> },
  { path: "/organisation/location", element: <LocationView /> },
  { path: "/organisation/edit-location/:id", element: <EditLocation /> },
  { path: "/organisation/department", element: <DepartmentView /> },
  { path: "/organisation/designation/", element: <DesignationView /> },
  { path: "/organisation/policies", element: <PoliciesView /> },
  { path: "/organisation/announcements", element: <AnnouncementsView /> },
  { path: "/organisation/expences", element: <ExpensesView /> },
  { path: "/organisation/edit-designation/:id", element: <EditDesignation /> },
  { path: "/organisation/edit-expences/:id", element: <EditExpenses /> },
  { path: "/organisation/expences-profile/:id", element: <ExpensesProfile /> },
  { path: "/organisation/policies-profile/:id", element: <PoliciesProfile/> },
  { path: "/organisation/edit-policies/:id", element: <EditPolicies  /> },
  {
    path: "/organisation/edit-announcements/:id",
    element: <EditAnnouncements />,
  },
  {
    path: "/organisation/announcements-profile/:id",
    element: <AnnouncementsProfile />,
  },
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