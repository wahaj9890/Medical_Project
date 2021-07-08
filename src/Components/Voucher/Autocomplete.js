import React, { useState } from "react";
import axios from "axios";

const Autocomplete = ({
  lang,
  onblur,
  voucherData,
  cssClass,
  disableButton,
}) => {
  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);

  let temp = [];
  temp = lang.map((item) => {
    return item.medicineName;
  });

  const fetchPopupDetails = async (medicineName) => {
    await axios
      .post("http://localhost:8080/fetchPopupDetails", medicineName)
      .then((res) => voucherData(res.data));
  };

  const handleChange = (e) => {
    onblur();
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = temp
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }

    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    setSearchtext(value);
    let tempData = {
      medicineName: value,
    };
    fetchPopupDetails(tempData);
    disableButton(searchtext);
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return (
      <ul className={suggest.length !== 0 ? "autocompleteDropDown" : ""}>
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li
                onClick={() => {
                  suggestedText(item);
                }}
              >
                {item}
              </li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="searchcontainer">
      <input
        type="text"
        placeholder="Search.."
        className={cssClass.addMedicine}
        value={searchtext}
        onChange={handleChange}
      />
      {getSuggestions()}
    </div>
  );
};
export default Autocomplete;
