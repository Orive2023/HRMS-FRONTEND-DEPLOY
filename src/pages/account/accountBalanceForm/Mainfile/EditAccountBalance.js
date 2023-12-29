import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Button from "@mui/material/Button";

const EditAccountBalance = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [accountBalance, setAccountBalance] = useState({
    employeeFullName: "",
    hsaBalance: "",
    fsaBalance: "",
  });

  const { employeeFullName, hsaBalance, fsaBalance } = accountBalance;

  useEffect(() => {
    loadAccountBalance();
  }, []);

  const loadAccountBalance = async () => {
    const result = await axios.get(
      `http://13.200.246.216:5000/accountBalance/get/${id}`
    );
    setAccountBalance(result.data);
  };

  const handleInputChange = (e) => {
    setAccountBalance({
      ...accountBalance,
      [e.target.name]: e.target.value,
    });
  };

  const updateAccountBalance = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://13.200.246.216:5000/accountBalance/update/${id}`,
      accountBalance
    );
    navigate("account/accountBalance");
  };
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5  shadow">
            <h2 className="mt-5"> Edit Account Balance</h2>
            <form onSubmit={(e) => updateAccountBalance(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="employeeFullName">
                  Employee Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="employeeFullName"
                  id=" employeeFullName"
                  required
                  value={employeeFullName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="hsaBalance">
                  HSA BALANCE
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="hsaBalance"
                  id="hsaBalance"
                  required
                  value={hsaBalance}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="fsaBalance">
                  FSA BALANCE
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="fsaBalance"
                  id="fsaBalance"
                  required
                  value={fsaBalance}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/account/account-balance")}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccountBalance;
