import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../images/logo.jpeg";
const MainNavigation = () => {
    {/* <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat libero eget magna commodo, quis pharetra tellus pretium. Sed viverra ante in mauris finibus dapibus. Maecenas congue dapibus nulla, eu gravida orci consequat eu. Phasellus nec nunc malesuada, aliquam massa ac, accumsan metus. Fusce sed dignissim lectus. Nunc elit tellus, sollicitudin ac accumsan ut, egestas et dui. Maecenas aliquam est a ligula scelerisque, in aliquam neque sodales. Nullam condimentum euismod dictum. Curabitur non ex elementum, pretium enim ut, ornare ipsum.</p>
        </main> */}
  return (
    
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/nasa"> Nasa </NavLink>
            </li>
            <li>
              <NavLink to="/imdb"> IMDB </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      
    
  )
};

export default MainNavigation;
