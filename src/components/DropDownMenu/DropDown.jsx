import React from "react";
import { useState } from "react";
import Edit from "../Svgicons/Edit";
import Info from "../Svgicons/Info";
import MenuDots from "../Svgicons/MenuDots";
import MinusCircle from "../Svgicons/MinusCircle";
import Upload from "../Svgicons/Upload";
import "./DropDown.css";

const DropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideToggleMenu = () => {
    setShowMenu(false)
  }
 
  return (
    <div  className="dropDownMenuWrapper">
      <span onClick={toggleMenu} className="cursor-pointer menuToggler">
        <MenuDots />
      </span>
      <div onClick={hideToggleMenu} className={` ${showMenu ? "showOverlay" : ""}`}>
        <ul className={`dropDowmMenu ${showMenu ? "showDropDownMenu" : ""}`}>
          <li>Edit <Edit className='dropDownIcon'/></li>
          <li>Courier Info <Info className='dropDownIcon'/></li>
          <li>Share <Upload className='dropDownIcon'/></li>
          <li>Remove <MinusCircle className='dropDownIcon'/></li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
