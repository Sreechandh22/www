import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {/* Home Link */}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  {/* About Link */}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  {/* Experience Link */}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/experience" className="my-3">
                      Experience
                    </Link>
                  </li>
                  {/* Portfolio Link */}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">
                      Portfolio
                    </Link>
                  </li>
                  {/* Blog Link */}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/blog" className="my-3">
                      Blog
                    </Link>
                  </li>
                  {/* Resume Link */}
                  <li className="menu_item">
                    <a
                      href="https://drive.google.com/file/d/1qGyq4bRazqdzeXTQ6yrKGJA28Q_4Rga3/view?usp=sharing"
                      target="_blank"
                      className="my-3"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                        window.open("https://drive.google.com/file/d/1qGyq4bRazqdzeXTQ6yrKGJA28Q_4Rga3/view?usp=sharing", "_blank");
                      }}
                    >
                      Resume
                    </a>
                  </li>
                  {/* Contact Link */}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
