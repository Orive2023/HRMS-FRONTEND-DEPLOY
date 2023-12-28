import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import AccountBalanceView from "./accountBalanceForm/Mainfile/AccountBalanceView";
import SubTypeView from '../Accounts/subType/Mainfile/SubTypeView';
import DebitView from '../Accounts/debit/Mainfile/DebitView';
import CreditView from '../Accounts/credit/Mainfile/CreditView';
import FinacialYearView from '../Accounts/financialYear/Mainfile/FinancialYearView';
import ContraVoucherView from '../Accounts/contraVoucher/Mainfile/ContraVoucherView';
import OpeningBalanceView from '../Accounts/openingbalance/Mainfile/BalanceView';

const routesData = [
  { path: "/", element: <Dashboard /> },
  { path: "/account/account-balance", element: <AccountBalanceView /> },
  { path: "/account/subType", element: <SubTypeView /> },
  { path: "/account/debit", element: <DebitView /> },
  { path: "/account/credit-voucher", element: <CreditView /> },
  { path: "/account/financial-year", element: <FinacialYearView /> },
  { path: "/account/contra-voucher", element: <ContraVoucherView /> },
  { path: "/account/opening-balance", element: <OpeningBalanceView /> },
  { path: "/account/debit-voucher", element: <ContraVoucherView /> },
];

const RoutingAccount = () => {
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

export default RoutingAccount;

