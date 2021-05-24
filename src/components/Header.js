import React from "react";
import { NavLink }  from "react-router-dom";
import Logo from "../img-app/Logo.svg";
import classes from "./Header.module.css"

export const Header = () =>{
  const CLASSES = {
    HEADER: classes.header,
    HEADER__LOGO: classes.header__logo,
    HEADER__NAVBAR: classes.header__navbar,
    HEADER__NAVIGATION: classes.header__navigation,
    HEADER__LINKS: classes.header__links,
    HEADER__LINK_MAIN: classes.header__link_main,
    HEADER__LINK_CONVERTER: classes.header__link_converter
  }
  return(
    <div className = {CLASSES.HEADER}>
      <nav className = {CLASSES.HEADER__NAVBAR}>

        <div className = {CLASSES.HEADER__LOGO}>
          <img src = {Logo}/>
        </div>

        <div className = {CLASSES.HEADER__NAVIGATION}>
            <div>
              <a href="#Exchange_rate">Exchange rate</a>
            </div>
            <div id = "">
              <a href="#Bitcoin_rate">Bitcoin rate</a>
            </div>
            <div>
             <a href="#Our_contacts">Our_contacts</a>
            </div>
        </div>

        <div className = "links">
            <NavLink className = {CLASSES.HEADER__LINK_MAIN} to="/" exact>Main</NavLink>
            <NavLink className = {CLASSES.HEADER__LINK_CONVERTER} to="/InfoRate">Currency converter</NavLink>
        </div>

      </nav>
    </div>
  );
}
