import React from "react";
import Explore from "../Svgicons/Explore";
import Notification from "../Svgicons/Notification";
import Settings from "../Svgicons/Settings";
import Wallet from "../Svgicons/Wallet";
import "./FooterMenu.css";

const FooterMenu = () => {
  return (
    <footer className="footerMenu">
      <Wallet className="footerIcons" />
      <Explore className="footerIcons" />
      <Notification className="footerIcons" />
      <Settings className="footerIcons" />
    </footer>
  );
};

export default FooterMenu;
