import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
export const Register = () => {
  const username = useRef()
  const password = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      "username": username.current.value,
      "password": password.current.value
    }

    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("lu_token", res.token)
        history.push("/")
      }
    })
  }

return (
  <main>
    <form onSubmit={handleRegister}>
      <h3>Register an account</h3>
      <fieldset>
        <label htmlFor="inputUsername">Username</label>
        <input ref={username} type="text" name="username" placeholder="Username" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputPassword"> Password </label>
        <input ref={password} type="password" name="password" placeholder="Password" required />
      </fieldset>
      <fieldset>
        <button type="submit">Register</button>
      </fieldset>
    </form>
    <section>
      Already registered? <Link to="/login">Login</Link>
    </section>
  </main>
)
}
