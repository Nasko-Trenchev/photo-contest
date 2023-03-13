import styles from "./Register.module.css"

export default function Register(){

    return (
        <>
      <h1>Register</h1>
      <p>Create a new account to submit your photos.</p>
      <form className={styles["register-form"]}>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required/>
        </div>
        <button type="submit">Register</button>
      </form>
      </>
    )
}