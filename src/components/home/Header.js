import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      {/* header section start */}
      <div className="header-container bg-[#9BCDD2]">
        <div className="header">
          <div className="logo">
            <span>
              Kirtasiye <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
          <div className="navbar">
            <ul>
              <li>Sparis ver</li>
              <li>Blog</li>
              <li>Yorumlar</li>
              <li>Iletisim</li>
            </ul>
          </div>
          <div className="login">
            <button className="header-btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
