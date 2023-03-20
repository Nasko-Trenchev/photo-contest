import styles from "./Register.module.css";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import {register} from '../../services/AuthService';

export default function Register(){
  const navigate = useNavigate();
  const {userLoginHandler} = useContext(userContext)

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const email = data.get("email");
    const password = data.get("password")
    const confirmPassword = data.get("confirm-password")

    if(password !== confirmPassword){
      return
    }

    register(email, password)
    .then(authData => {
      userLoginHandler(authData)
      navigate('/');
      })
    .catch(() => {
      // TODO: Navigate to 404
      console.log("error");
    })
    
  }
    return (
        <>
      <h1 className={styles["paragraph"]}>Register</h1>
      <p className={styles["paragraph"]}>Create a new account to submit your photos.</p>
      <form className={styles["register-form"]} onSubmit={onRegisterSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required/>
        </div>
        <button type="submit">Register</button>
      </form>
      </>
    )
}