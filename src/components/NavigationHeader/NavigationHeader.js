import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import styles from './NavigationHeader.module.css';

export default function NavigationHeader(){

  const {user} = useContext(UserContext);

    return (
        <header>
        <nav className={styles["navbar__menu"]}>
        <NavLink to="/" className={styles["bn8"]}><i className="fa fa-home"></i> Home</NavLink>

          {/* <div className={styles["logo"]}>
          <img src="asd" alt="Phosto"/>
          </div> */}
        <ul className={styles["navbar__list"]}>
          {user.accessToken ?
          <>
          {/* <li><NavLink className={styles["navbar__item"]} to="/">Home</NavLink></li> */}
          <li><NavLink className={styles["navbar__item"]} to="/logout">Logout</NavLink></li></>
          :
          <>
          {/* <li><NavLink className={styles["navbar__item"]} to="/">Home</NavLink></li> */}
          <li><NavLink className={styles["navbar__item"]} to="/login">Login</NavLink></li>
          <li><NavLink className={styles["navbar__item"]} to="/register">Register</NavLink></li></>}
          {user.email === "admin@abv.bg" && <li><NavLink className={styles["navbar__item"]} to="/admin">Admin</NavLink></li>}
        </ul>
      </nav>
    </header>
    )
}