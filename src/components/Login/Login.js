import React from 'react';
import styles from './Login.module.css'

function Login(){

    return(
        <>
        <h1 className={styles["paragraph"]}>Login</h1>
        <form  className={styles["login-form"]}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>
          <label  htmlFor="password">Password:</label>
          <input  type="password" id="password" name="password" required/>
          <button type="submit">Log in</button>
        </form>
        </>
    )
}

export default Login;