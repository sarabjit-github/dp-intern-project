import React from "react";
import "./navbar.css";
import { FaHome, FaRegBell, FaTools } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="n-left">
          <div className="logo">
            <img
              src="https://deepthought.education/assets/images/logo/logo.svg"
              className="App-logo"
              alt="Deepthought logo"
            />
          </div>
        </div>
        <div className="n-right">
          <nav className="navbar">
            <div className="icon">
              <FaHome />
            </div>
            <div className="icon">
              <FaTools />
            </div>
            <div className="icon">
              <FaRegBell />
            </div>
            <div className="icon">
              <img
                src="https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1659916800&Signature=RcUbAlGtYDDj2QBIKqB5fafM1Nfk3gJJRNUmcyCJ3FLVZE70cf5SynbFtq0-THJ3eMI-Lbby0bOWuEDC5gTx2aYXhZGsYrlg7QU7AWclO81~8C2vmmOnmf-lx51M5bTY7W4UA0bT7Ecf1HQX7-7YAeJM8PWr03q84Ii6FiRxRkiMdc-KdvNeFa-Mqj09zVQNGKrO7wvfcgYOCD6aKqjQaodUWj2Q78H6if1fWcbquywsK9hiTlGUkFtsEJnhbfA0g5eE9bjTvI3QQJl5Nzw8nlguq8o6SqWNr5Kvd4dxLIjZcup8gBa09Be30qeTxYwNYOvwbcBXG5FSmOd~baPqiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="person img"
                width="40"
                height="40"
              />
            </div>
          </nav>
          <div className="sm-menu">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </header>
    </>
  );
};
