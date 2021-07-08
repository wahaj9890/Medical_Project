import React, { useState, useRef } from "react";
import "./Voucher.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import "./table.css";
import ReactToPrint from "react-to-print";
import Classcomp from "./Classcomp";

const initialValue = [
  {
    CompanyName: "",
    expDate: "",
    medicineCode: "",
    medicineName: "",
    medicinePrice: "",
    mfgDate: "",
    typeOfMedicine: "",
    // enteredQty: "",
  },
];

function Voucher() {
  const [search, setSearch] = useState([]);
  const [showData, setShowData] = useState(initialValue);
  const [sellQty, setSellQty] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [cartList, setCartList] = useState([]);

  const voucherData = (obj) => {
    setShowData(obj);
  };

  const removeItemDetails = (id) => {
    const newItem = cartList.filter((item, index) => {
      return index !== id;
    });
    setCartList(newItem);
  };
  const componentRef = useRef();
  //Add to cart
  const addToCart = (itemList) => {
    itemList.map((item) => {
      return setCartList((prev) => {
        return [
          ...prev,
          {
            ...item,
            enteredQty: sellQty,
            amount: item.medicinePrice * sellQty,
          },
        ];
      });
    });
  };

  //Sell Medicine

  const sellMedicine = async () => {
    const temPurchaseQty = parseInt(showData[0].purchaseQty);
    if (parseInt(sellQty) <= temPurchaseQty) {
      const remaningQty = temPurchaseQty - parseInt(sellQty);
      const data = {
        quantity: remaningQty,
        medicineCode: showData[0].medicineCode,
      };
      await axios.post("http://localhost:8080/sellMedicine", data);

      alert("One item sold");
      addToCart(showData);
      setShowData(initialValue);
      setSellQty("");
    } else {
      alert("plz enter valid quantity");
    }
  };

  const sendSearchName = async () => {
    await axios.get("http://localhost:8080/searchName").then((res) => {
      setSearch(res.data);
    });
  };

  //Disabled Button

  const disableButton = (searchtext) => {
    setIsDisable(searchtext.length !== 0 || searchtext !== "");
  };

  return (
    <>
      <table className="voucherTbl">
        <thead>
          <tr>
            <th className="tblHeading">Medicine Name</th>
            <th className="tblHeading">Medicine Code</th>
            <th className="tblHeading">Type of Medicine </th>
            <th className="tblHeading">Expiry Date</th>
            <th className="tblHeading">Price </th>
            <th className="tblHeading">Insert Quantity</th>
            <th className="tblHeading">Add Item</th>
          </tr>
        </thead>

        <tr>
          <td className="tblData">
            <Autocomplete
              lang={search}
              onblur={sendSearchName}
              voucherData={voucherData}
              cssClass={{ addMedicine: "addMedicine-input" }}
              disableButton={disableButton}
            />
          </td>
          <td className="tblData">
            <input
              type="text"
              className="addMedicine-input"
              value={showData[0].medicineCode}
              readOnly
            />
          </td>
          <td className="tblData">
            <select
              className="addMedicine-input"
              value={showData[0].typeOfMedicine}
              readOnly
            >
              <option value="tablet">TABLET</option>
              <option value="syrup">SYRUP</option>
              <option value="xyz">XYZ</option>
            </select>
          </td>
          <td className="tblData">
            <input
              type="date"
              className="addMedicine-input"
              value={showData[0].expDate}
              readOnly
            />
          </td>
          <td className="tblData">
            <input
              type="text"
              className="addMedicine-input"
              value={showData[0].medicinePrice}
              readOnly
            />
          </td>
          <td className="tblData">
            <input
              type="text"
              className="addMedicine-input"
              value={sellQty}
              onChange={(e) => {
                setSellQty(e.target.value);
              }}
            />
          </td>
          <td className="tblData">
            <button
              style={{
                background: !isDisable ? "#dcdcdc" : "#007aff",
                color: !isDisable ? "" : "#fff",
              }}
              type="submit"
              disabled={!isDisable}
              className="cartBtn"
              onClick={sellMedicine}
            >
              Add to Cart
            </button>
          </td>
        </tr>
      </table>

      {/* <Purchasetable
        removeItemDetails={removeItemDetails}
        cartList={cartList}
        ref={componentRef}
      /> */}

      <Classcomp
        removeItemDetails={removeItemDetails}
        cartList={cartList}
        ref={componentRef}
      />
      <ReactToPrint
        trigger={() => (
          <div className="printCls">
            <button className="printBtn">Print this out!</button>
          </div>
        )}
        content={() => componentRef.current}
        // copyStyles="false"
      />
      {/* <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => <Voucher />}
        />
        <ComponentToPrint ref={el => (<Voucher /> = el)} /> */}
    </>
  );
}
export default Voucher;
