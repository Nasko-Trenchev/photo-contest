import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate, NavLink } from 'react-router-dom';

import styles from './Login.module.css'

import { login } from '../../services/AuthService'

function Login() {
  const {userLoginHandler} = useContext(UserContext)
  const navigate = useNavigate();
  
  const onLoginSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
    } = Object.fromEntries(new FormData(e.target));

    login(email, password)
      .then(authData => {
        userLoginHandler(authData);

        if(authData.code === 403) {
          throw new Error(authData.message)
        }
        navigate('/');
      });
  }

  return (
    <>
      <h1 className={styles["paragraph"]}>Login</h1>
      <form className={styles["login-form"]} onSubmit={onLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Log in</button>
        <NavLink className={styles["navlink"]} to="/register">Don`t have an account yet?</NavLink>
      </form>
    </>
  )
}

export default Login;