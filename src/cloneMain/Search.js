import React, { useState } from "react";
import logo from "./images/logo1.png";
import profileImg from "./images/profileImg.jpg";
import functions from "./images/functions1.png";

const Search = ({ onSubmit }) => {
  const [searchTearm, setSearchTearm] = useState("");
  const handleChange = (event) => setSearchTearm(event.target.value);
  const keyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTearm);
    }
  };
  return (
    <>
      <div className="header">
        <a href="/" className="brand">
          <img src={logo} alt="logo" className="logoBrand" />
        </a>
        <input
          type="text"
          fullwidth
          placeholder="Search.."
          value={searchTearm}
          onChange={handleChange}
          onKeyPress={keyPress}
        />
        <div className="icons">
          <img src={functions} alt="functions" className="functions" />
          <a href="/" className="profile">
            <img src={profileImg} alt="profileImg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Search;
