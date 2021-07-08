import React, { useState, useEffect } from "react";
import "./purchasetable.css";
import CancelIcon from "@material-ui/icons/Cancel";

function Purchasetable({ cartList, removeItemDetails, ref }) {
  const [totalAmount, setTotalAmount] = useState();
  const [purchaseDetail, setPurchaseDetail] = useState(cartList);

  useEffect(() => {
    setPurchaseDetail(cartList);
  }, [cartList]);

  const myFunc = (total, num) => {
    return total + num;
  };
  const totalValue = (e) => {
    e.preventDefault();
    console.log(purchaseDetail);
  };

  const totalCalculate = () => {
    let temAmt = [];
    temAmt = cartList.map((item) => {
      return item.amount;
    });

    setTotalAmount(temAmt.reduce(myFunc, 0));
  };

  //Current Date
  const toDayDate = new Date().toLocaleDateString();
  //Invice Number
  const date = new Date();
  const firsNum = Math.floor(Math.random() * 49 + 1);
  const invoice = `${firsNum}${date.getDate()}${date.getHours()}${date.getMonth()}${date.getSeconds()}${date.getMinutes()}
  `;
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
                  Phone No.<span>+91 8149757798</span>
                </div>
              </address>
            </div>
          </div>
          <div className="invoiceHeading">
            <h1>Medical Invoice</h1>
            <p className="fw-bold">
              Date:<span>{toDayDate}</span>
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
                <input type="text" className="inputStyle" />
              </td>
              <td className="billRowsCols fw-bold">Age</td>
              <td className="billRowsCols">
                <input type="text" className="inputStyle" />
              </td>
              <td className="billRowsCols fw-bold">Gender</td>
              <td className="billRowsCols genderStyle">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="inputStyle"
                  />
                  Male
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="inputStyle"
                  />
                  Female
                </div>
              </td>
            </tr>
            <tr className="billRowsCols">
              <td className="billRowsCols fw-bold">Address</td>
              <td className="billRowsCols">
                <textarea className="customerAddress inputStyle"></textarea>
              </td>
              <td className="billRowsCols fw-bold">Phone No.</td>
              <td className="billRowsCols">
                <input type="text" className="inputStyle" />
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
          </div>
        )}
        {cartList.length === 0 && (
          <div className="alert alert-warning text-center fw-bold">
            There is no record found!!!
          </div>
        )}
        {/* <div className="printCls">
          <button className="printBtn">Print</button>
        </div> */}
      </form>
    </>
  );
}

export default Purchasetable;
