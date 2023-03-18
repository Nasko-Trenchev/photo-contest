import { userContext } from "../../contexts/userContext";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

export default function NavigationHeader(){

  const {user} = useContext(userContext);

    return (
        <header>
        <nav className="navbar__menu">
          <div className="logo">
          <img src="asd" alt="Photo"/>
          </div>
        <ul className="navbar__list">
          {user.accessToken ?
          <><li><NavLink className="navbar__item" to="/">Home</NavLink></li>
          <li><NavLink className="navbar__item" to="/animals">Animals</NavLink></li>
          <li><NavLink className="navbar__item" to="/nature">Nature</NavLink></li>
          <li><NavLink className="navbar__item" to="/galery">Galery</NavLink></li>
          <li><NavLink className="navbar__item" to="/logout">Logout</NavLink></li></>
          :
          <><li><NavLink className="navbar__item" to="/login">Login</NavLink></li>
          <li><NavLink className="navbar__item" to="/register">Register</NavLink></li></>}
        </ul>
      </nav>
    </header>
    )
}