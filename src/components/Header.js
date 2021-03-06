import { NavLink }  from "react-router-dom";
import Logo from "../img-app/Logo.svg";
import classes from "./Header.module.css";
import { HashLink } from 'react-router-hash-link';

export const Header = () =>{
  const CLASSES = {
    HEADER: classes.header,
    HEADER__BLOCK: classes.block_1136,
    HEADER__LOGO: classes.header__logo,
    HEADER__NAVBAR: classes.header__navbar,
    HEADER__NAVIGATION: classes.header__navigation,
    HEADER__LINKS: classes.header__links,
    HEADER__LINK_MAIN: classes.header__link_main,
    HEADER__LINK_CONVERTER: classes.header__link_converter
  }
  return(
    <div className = {CLASSES.HEADER}>
      <div className = {CLASSES.HEADER__BLOCK}>
        <nav className = {CLASSES.HEADER__NAVBAR}>

          <div className = {CLASSES.HEADER__LOGO}>
            <img src = {Logo}/>
          </div>

          <div className = {CLASSES.HEADER__NAVIGATION}>
              <div>
                <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to="/#Exchange_rate">Exchange rate</HashLink>
              </div>
              <div id = "">
                <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                 to="/#Bitcoin_rate">Bitcoin rate</HashLink>
              </div>
              <div>
                <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                 to="/#Our_contacts">Our_contacts</HashLink>
              </div>
          </div>

          <div className = "links">
              <NavLink className = {CLASSES.HEADER__LINK_MAIN} to="/" exact>Main</NavLink>
              <NavLink className = {CLASSES.HEADER__LINK_CONVERTER} to="/InfoRate">Currency converter</NavLink>
          </div>
          
        </nav>
      </div>
    </div>
  );
}
