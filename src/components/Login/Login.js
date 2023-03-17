import styles from './Login.module.css'

import { login } from '../../services/AuthService'

function Login() {
  const onLoginSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
    } = Object.fromEntries(new FormData(e.target));

    login(email, password)
      .then(authData => {
        console.log(authData);
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
      </form>
    </>
  )
}

export default Login;