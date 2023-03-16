import { NavLink } from "react-router-dom";

export default function NavigationHeader(){

    return (
        <header>
        <nav className="navbar__menu">
          <div className="logo">
          <img src="asd" alt="Photo"/>
          </div>
        <ul className="navbar__list">
          <li><NavLink className="navbar__item" to="/">Home</NavLink></li>
          <li><NavLink className="navbar__item" to="/login">Login</NavLink></li>
          <li><NavLink className="navbar__item" to="/register">Register</NavLink></li>
          <li><NavLink className="navbar__item" to="/animals">Animals</NavLink></li>
          <li><NavLink className="navbar__item" to="/nature">Nature</NavLink></li>
          <li><NavLink className="navbar__item" to="/galery">Galery</NavLink></li>
        </ul>
      </nav>
    </header>
    )
}