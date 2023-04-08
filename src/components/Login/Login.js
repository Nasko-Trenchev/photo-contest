import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { AlertContext } from '../../contexts/AlertContext'

import Input from '../Input/Input';
import styles from './Login.module.css'

import { login } from '../../services/AuthService'

function Login() {
  const [formInput, setformInput] = useState({
    email: '',
    password: '',
  });

  const { userLoginHandler } = useContext(UserContext)
  const { setAlertState } = useContext(AlertContext)
  const navigate = useNavigate();

  const onUserInput = (e) => {
    setformInput(oldData => ({
      ...oldData,
      [e.target.name]: e.target.value
    }))
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    login(formInput.email, formInput.password)
      .then(authData => {
        if (authData.code) {
          setAlertState({ message: authData.message, show: true })
          setformInput({
            email: '',
            password: '',
          })

          return;
        }
        userLoginHandler(authData)
        navigate('/');
      })
      .catch((e) => {
        setAlertState({ message: e.message, show: true })
      })
  }

  return (
    <>
      <h1 className={styles["paragraph"]}>Login</h1>
      <form className={styles["login-form"]} onSubmit={onFormSubmit}>
        <Input type="text" id="email" label="Email" onChange={onUserInput} value={formInput.email} />
        <Input type="password" id="password" label="Password" onChange={onUserInput} value={formInput.password} />
        <button type="submit">Log in</button>
        <NavLink className={styles["navlink"]} to="/register">Don`t have an account yet?</NavLink>
      </form>
    </>
  )
}

export default Login;