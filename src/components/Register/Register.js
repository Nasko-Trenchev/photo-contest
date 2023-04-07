import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate, NavLink } from "react-router-dom";
import { register } from '../../services/AuthService';
import { AlertContext } from '../../contexts/AlertContext'

import styles from "./Register.module.css";

export default function Register() {

  const [formInput, setformInput] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate();
  const { userLoginHandler } = useContext(UserContext)
  const { setAlertState } = useContext(AlertContext)

  const onUserInput = (e) => {
    setformInput(oldData => ({
      ...oldData,
      [e.target.name]: e.target.value
    }))
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line 
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formInput.email);

    if (!validEmail) {
      setAlertState({ message: 'Email should have format like: example@gmail.com', show: true })
      setformInput({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
      return;
    }

    if (formInput.password !== formInput.confirmPassword) {
      setAlertState({ message: 'Passwords do not match!', show: true })
      setformInput({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
      return;
    }

    if (formInput.password.length < 6) {
      setAlertState({ message: 'Password should be at least 6 charachters long!', show: true })
      setformInput({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
      return;
    }

    if (formInput.username.length < 3) {
      setAlertState({ message: 'Username should be at least 3 characters long!', show: true })
      setformInput({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
      return;
    }
    register(formInput.email, formInput.password, formInput.username)
      .then(authData => {
        if (authData.code) {
          setAlertState({ message: authData.message, show: true })
          setformInput({
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
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
      <h1 className={styles["heading"]}>Register</h1>
      <h2 className={styles["secondHeading"]}>Create new account to submit your photos</h2>
      <form className={styles["register-form"]} onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"
            value={formInput.email} onChange={onUserInput} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"
            value={formInput.username} onChange={onUserInput} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
            value={formInput.password} onChange={onUserInput} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword"
            value={formInput.confirmPassword} onChange={onUserInput} />
        </div>
        <button type="submit">Register</button>
        <NavLink className={styles["navlink"]} to="/login">Already a member?</NavLink>
      </form>
    </>
  )
}