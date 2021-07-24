import React, { useState, useEffect } from "react";
import "./purchasetable.css";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
//Current Date

let currentDate = new Date();
const todayDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  "-" +
  currentDate.getDate();

//Invice Number
const date = new Date();
const firsNum = Math.floor(Math.random() * 49 + 1);
const invoice = `${firsNum}${date.getDate()}${date.getHours()}${date.getMonth()}${date.getSeconds()}${date.getMinutes()}
  `;

function Purchasetable({ cartList, removeItemDetails, ref }) {
  const [totalAmount, setTotalAmount] = useState();
  const [purchaseDetail, setPurchaseDetail] = useState(cartList);
  const [header, setHeader] = useState({
    customerName: "",
    customerAge: "",
    customerGender: "",
    customerAddress: "",
    customerDr: "",
    customerPhone: "",
    // invoiceNumber: "",
    // totalBill: "",
    customerDate: todayDate,
  });

  useEffect(() => {
    setPurchaseDetail(cartList);
  }, [cartList]);

  const myFunc = (total, num) => {
    return total + num;
  };
  const totalValue = (e) => {
    e.preventDefault();

    let data = { invoiceNumber: invoice, totalBill: totalAmount };
    // let temp = header.concat(data);
    let temp = { ...header, ...data };
    debugger;
    console.log(temp);
    setHeader(temp);
    // setHeader((prev) =>return { ...prev, });
    console.log(header);

    axios.post("http://localhost:8080/addToDb", temp);
  };
  console.log(invoice);
  console.log(header);
  const totalCalculate = () => {
    let temAmt = [];
    temAmt = cartList.map((item) => {
      return item.amount;
    });
    setTotalAmount(temAmt.reduce(myFunc, 0));
  };

  //header in db
  const onChangeHandler = (e) => {
    setHeader({
      ...header,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="previewForm"
        onSubmit={(e) => {
          totalValue(e);
        }}
      >
        <section className="billHeader">
          <div className="medicalName">
            <img src="logo.png" alt="medicalLogo" className="medicalLogo" />
            <div>
              <h2>Medical Name</h2>
              <address>
                Chaitanya Nagar, Airport Road, Nanded,431605.
                <div>
                  Phone No.<span>+91 1234567890</span>
                </div>
              </address>
            </div>
          </div>
          <div className="invoiceHeading">
            <h1>Medical Invoice</h1>
            <p className="fw-bold">
              Date:<span>{todayDate}</span>
            </p>
            <p className="fw-bold">
              Invoice Number:<span> INV{invoice}</span>
            </p>
          </div>
        </section>
        <hr />
        {/* bill to section */}

        <table className="billContainer">
          <thead>
            <tr className="billRowsCols">
              <td className="billRowsCols fw-bold">Name</td>
              <td className="billRowsCols">
                <input
                  type="text"
                  className="inputStyle"
                  name="customerName"
                  value={header.customerName}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </td>
              <td className="billRowsCols fw-bold">Age</td>
              <td className="billRowsCols">
                <input
                  type="text"
                  className="inputStyle"
                  name="customerAge"
                  value={header.customerAge}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </td>
              <td className="billRowsCols fw-bold">Gender</td>
              <td className="billRowsCols genderStyle">
                <div>
                  <input
                    type="radio"
                    name="customerGender"
                    value="Male"
                    checked={header.customerGender === "Male"}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="inputStyle"
                  />
                  Male
                </div>
                <div>
                  <input
                    type="radio"
                    name="customerGender"
                    value="Female"
                    checked={header.customerGender === "Female"}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="inputStyle"
                  />
                  Female
                </div>
              </td>
            </tr>
            <tr className="billRowsCols">
              <td className="billRowsCols fw-bold">Address</td>
              <td className="billRowsCols">
                <textarea
                  className="customerAddress inputStyle"
                  name="customerAddress"
                  value={header.customerAddress}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                ></textarea>
              </td>

              <td className="billRowsCols fw-bold">Doctor Name</td>
              <td className="billRowsCols">
                <input
                  type="text"
                  className="inputStyle"
                  name="customerDr"
                  value={header.customerDr}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </td>
              <td className="billRowsCols fw-bold">Phone No.</td>
              <td className="billRowsCols">
                <input
                  type="text"
                  className="inputStyle"
                  name="customerPhone"
                  value={header.customerPhone}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </td>
            </tr>
          </thead>
        </table>

        <hr className="sectionHr" />
        {cartList.length !== 0 && (
          <div className="scrollBar">
            <table className="purchasetbl">
              <thead>
                <tr>
                  <th className="tblHeading">Medicine Name</th>
                  <th className="tblHeading">Medicine Code</th>
                  <th className="tblHeading">Type of Medicine </th>
                  <th className="tblHeading">Expiry Date</th>
                  <th className="tblHeading">Price </th>
                  <th className="tblHeading">Insert Quantity</th>
                  <th className="tblHeading">Bill</th>
                  <th className="tblHeading">Voucher</th>
                </tr>
              </thead>
              {cartList.map((cardItem, index) => {
                return (
                  <tr key={index}>
                    <td className="tblData">{cardItem.medicineName}</td>
                    <td className="tblData">{cardItem.medicineCode}</td>
                    <td className="tblData">{cardItem.typeOfMedicine}</td>
                    <td className="tblData">{cardItem.expDate}</td>
                    <td className="tblData">{cardItem.medicinePrice}</td>
                    <td className="tblData">{cardItem.enteredQty}</td>
                    <td className="tblData">{cardItem.amount}</td>
                    <td className="tblData">
                      <CancelIcon
                        className="cancelIcon"
                        onClick={() => {
                          removeItemDetails(index);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
              {cartList.length !== 0 && (
                <tr>
                  <td colspan="6" className="totalSection">
                    Total
                  </td>
                  <td className="totalCalc">{totalAmount}</td>
                  <td className="totalCalc calcTd">
                    <button
                      className="calcbtn"
                      type="button"
                      onClick={totalCalculate}
                    >
                      Calculate
                    </button>
                  </td>
                </tr>
              )}
            </table>
            <button className="printBtn" disabled>
              Add in DB
            </button>
          </div>
        )}
        {cartList.length === 0 && (
          <div className="alert alert-warning text-center fw-bold">
            There is no record found!!!
          </div>
        )}
      </form>
    </>
  );
}

export default Purchasetable;
