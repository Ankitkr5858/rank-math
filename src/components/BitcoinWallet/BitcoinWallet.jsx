import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import ArrowDown from "../Svgicons/ArrowDown";
import Bitcoin from "../Svgicons/Bitcoin";
import "./BitcoinWallet.css";

const BitcoinWallet = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  return (
    <div className="bitCoinWallet">
      <div className="flexBox">
        <div className="heading">
          <Bitcoin className="bitcoinCircle" />
          <span>Bitcoin</span>
        </div>
        <span className="text-gray">BTC</span>
      </div>
      <div className="totalAmount">
        <span>3.529020 BTC</span>
      </div>
      <div className="flexBox mb2">
        <span className="text-gray">$19.153 USD</span>
        <span className="percentageRectangle">-2.32%</span>
      </div>
      <div className="downArrow">
        <span onClick={handleDropDown}>
          <ArrowDown />
        </span>
        {showDropDown && (
          <div className="btnWrapper">
            <Button label="Buy" variant="primary" />
            <Button label="Sell" variant="secondary" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BitcoinWallet;
