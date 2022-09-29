import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getPassData} from "../functions/get-data";

const PasswordGen = () => {
  // STATES
  const [passData, setPassData] = useState({});
  const [password, setPassword] = useState("Password Generator");
  const [upChecked, setUpChecked] = useState(true);
  const [loChecked, setLoChecked] = useState(true);
  const [nuChecked, setNuChecked] = useState(true);
  const [scChecked, setScChecked] = useState(true);

  // Server Communication
  useEffect(() => {
    getPassData() //fetches specific server data
      .then( (dataVal) => {
        setPassData(dataVal); //sets the "data" state equal to data from server
      } )
      .catch((err) => console.log(err));
  }, []);

  //generates a new password
  const generatePassword = () => {
    var length = 12,
      charset = "",
      retVal = "";
    if (upChecked) charset += passData.upper;
    if (loChecked) charset += passData.lower;
    if (nuChecked) charset += passData.num;
    if (scChecked) charset += passData.sChar;
    for (var i = 0, nth = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * nth));
    }
    console.log(`Your password is ${retVal}`);
    return retVal;
  };
  //event handlers
  const handleCopy = ()=>{
    navigator.clipboard.writeText(password);
    // Alert the copied text
    toast.success(`${password} copied!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const handleNoCheck = () => {
    if (!upChecked && !loChecked && !nuChecked && !scChecked) {
      toast.warn("You must select at least 1 field", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleData = (event) => {
    event.preventDefault(); //default action of form should not be taken
    console.warn(
      `all data: ${upChecked},${loChecked},${nuChecked},${scChecked}`
    );
    setPassword(generatePassword());
  };
  return (
    <div className="pass-gen-wrapper">
      <form className="pass-gen-container" onSubmit={handleData}>
        <input
          type="text"
          value={password}
          className="result-bar"
          readOnly="readonly"
          onClick={handleCopy}
        />
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        <button type="submit" className="pass-btn" onClick={handleNoCheck}>
          Generate Password
        </button>

        <div className="checkboxes-container">
          <div className="check-block1">
            <input
              type="checkbox"
              checked={upChecked}
              onChange={(e) => setUpChecked(e.target.checked)}
            />
            <label>Allow uppercase</label>
          </div>
          <div className="check-block2">
            <input
              type="checkbox"
              checked={loChecked}
              onChange={(e) => setLoChecked(e.target.checked)}
            />
            <label>Allow lowercase</label>
          </div>
          <div className="check-block3">
            <input
              type="checkbox"
              checked={nuChecked}
              onChange={(e) => setNuChecked(e.target.checked)}
            />
            <label>Allow numbers</label>
          </div>
          <div className="check-block4">
            <input
              type="checkbox"
              checked={scChecked}
              onChange={(e) => setScChecked(e.target.checked)}
            />
            <label>Allow special characters</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordGen;
