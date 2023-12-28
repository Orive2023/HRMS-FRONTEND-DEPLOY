import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import StateContraVoucher from "./StateContraVoucher";
import * as ContraVoucherApi from "./ContraVoucherApi";

const ContraVoucherForm = (
  {formData, setFormData, setFormVisible, setToggle}) => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();
  const {
    
    setContraVoucher,
    file,
    ledgerError,
    setLedgerError,
   setOpen,

   
    setLedger,
   

   
  } = StateContraVoucher();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
   
    setFormData({
      ...formData,
      [name]: value,
     
      [e.target.name]: e.target.value,
    
    });
  };

  

  const [items, setItems] = useState([
    {
      id: 1,
      voucherType: "",
      reversedAccountHead: "",
      date: "",
      remark: "",
      accountName: "",
      ledgerComment: "",
      debit: "",
      credit: "",
      
    },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      voucherType: "",
      reversedAccountHead: "",
      date: "",
      remark: "",

      createdDate: getCurrentDate(),
    };

    setItems([...items, newItem]);
  };

  console.log(formData);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

   

   
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );

    setItems(updatedItems);
  
   
    setFormData({
      ...formData,
      [field]: value,
    
    });
    const formDataWithUpdatedItems = {
      ...formData,
      items: updatedItems,
      
    };
   

   
    

    if (field === "ledgerComment") {
      formDataWithUpdatedItems.ledgerComment = value;
    }

    if (field === "accountName") {
      formDataWithUpdatedItems.accountName = value;
    }

    if (field === "debit") {
      formDataWithUpdatedItems.debit = value;
    }

    if (field === "credit") {
      formDataWithUpdatedItems.credit = value;
    }

    if (field === "voucherType") {
      formDataWithUpdatedItems.voucherType = value;
    }

    setFormData(formDataWithUpdatedItems);
  };

  const validateInput2 = (value, setValue, setError, fieldName) => {
    const isValid =
      value.length >= 2 && value.length <= 30 && /^[a-zA-Z\s]+$/.test(value);
    setLedgerError(
      isValid
        ? ""
        : `${fieldName} must be between 2 to 30 characters and only alphabets must be used.`
    );
    setValue(value);
  };

  const handleDescriptionChange = (e) => {
    setLedger(e.target.value);
    validateInput2(e.target.value, setLedger, setLedgerError, "ledgerComment");
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };


  const cancelButton = () => {
    setOpen(false);
    setFormData({
      voucherType: "",
      reversedAccountHead: "",
      date: "",
      remark: "",
      accountName: "",
      ledgerComment: "",
      debit: "",
      credit: "",
    });
  };

  let buttonCheck =
    formData.voucherType.length > 0 &&
    formData.reversedAccountHead.length > 0 &&
    formData.date.length > 0 &&
    formData.remark.length >0 &&
    formData.accountName.length > 0 && 
    formData.ledgerComment.length > 0 && 
    formData.debit.length > 0 && 
    formData.credit.length;

  

  const saveContraVoucher = async () => {
    try {
      await ContraVoucherApi.saveContraVoucher(formData);
      navigate("/accounts/accounts");
      ContraVoucherApi.loadContraVoucher();
      setFormData({
        voucherType: "",
        reversedAccountHead: "",
        date: "",
        remark: "",
        accountName: "",
        ledgerComment: "",
        debit: "",
        credit: "",
      });

      handleClose();
    } catch (error) {
      console.error("Error saving contravoucher:", error);
    }
  };

  const loadContraVoucher = async () => {
    try {
      const result = await ContraVoucherApi.loadContraVoucher();
      setContraVoucher(result);
    } catch (error) {
      console.error("Error loading Contra Voucher:", error.response.data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
  };

  const ReversedAccountHeadTypes = [
    {
      value: "",
      label: "Select Reversed Account Head Type",
    },
    {
      value: "ABC BANK",
      label: "ABC BANK",
    },
    {
      value: "CASH IN HAND",
      label: "CASH IN HAND",
    },
    {
      value: "PETTY CASH",
      label: "PETTY CASH",
    },
    {
      value: "SCB BANK",
      label: "SCB BANK",
    },
  ];

  const Types = [
    {
      value: "",
      label: "Select Account Name ",
    },
    {
      value: "HDFC",
      label: "HDFC",
    },
    {
      value: "AXIS",
      label: "AXIS",
    },
    {
      value: "SBI",
      label: "SBI",
    },
    {
      value: "PNB",
      label: "PNB",
    },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          style={{
            margin: "8px 15px",
            width: "30%",
          }}
          label="Voucher Type"
          placeholder="Contra"
          id="outlined-size-small"
          value={formData.voucherType}
          onChange={(e) => handleInputChange("voucherType", e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          disabled

         
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}
        >
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            label="Reverse Account Head"
            id="outlined-size-small"
            select
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            name="reversedAccountHead"
            value={formData.reversedAccountHead}
            onChange={(e) => handleInputChange(e)}
          >
            {ReversedAccountHeadTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            name="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleInputChange(e)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Remarks"
            type="text"
            fullWidth
            name="remark"
            id="remark"
            value={formData.remark}
            onChange={(e) => handleInputChange(e)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <TableContainer component={Paper}>
          <Table style={{ border: "1px solid #ddd" }}>
            <TableHead>
              <TableRow style={{ background: "#f2f2f2" }}>
                <TableCell
                  className="table-data"
                  // type="date"
                >
                  Account Name
                </TableCell>
                <TableCell className="table-data">Ledger Comment</TableCell>
                <TableCell className="table-data">Debit</TableCell>
                <TableCell className="table-data">Credit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} style={{ border: "1px solid #ddd" }}>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      style={{
                        margin: "8px 15px",
                        width: "90%",
                      }}
                      label="Account Name"
                      id="outlined-size-small"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="accountName"
                      value={formData.accountName}
                      onChange={(e) => handleInputChange(e)}
                    >
                      {Types.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>

                  {/* ledgerComment*/}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      value={item.ledgerComment}
                      onChange={(e) => {
                        handleDescriptionChange(e);
                        handleItemChange(
                          item.id,
                          "ledgerComment",
                          e.target.value
                        );
                      }}
                      error={ledgerError}
                      helperText={ledgerError}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 30);
                        handleDescriptionChange(e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* debit */}

                  <TableCell className="table-data">
                    <TextField
                      type="number"
                      name="debit"
                      value={item.debit}
                      onChange={(e) => {
                        handleItemChange(item.id, "debit", e.target.value);
                      }}
                      style={{ width: "180px" }}
                    />
                  </TableCell>

                  {/* Amount */}
                  <TableCell className="table-data">
                    <TextField
                      type="number"
                      name="credit"
                      value={item.credit}
                      onChange={(e) => {
                        handleItemChange(item.id, "credit", e.target.value);
                        handleInputChange(e);
                      }}
                      style={{ width: "180px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{
            // display: "flex",
            // justifyContent: "end",
            marginBottom: "20px",
          }}
        ></div>

        <div className="data-buttons">
          <Button
           id="input-btn-submit-popup"
            className="submit"
            type="submit"
            onClick={saveContraVoucher}
            variant="outlined"
            disabled={buttonCheck?false:true}
          >
            Submit
          </Button>
          <Button
           id="input-btn-cancel-popup"
           onClick={cancelButton}
           
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContraVoucherForm;
