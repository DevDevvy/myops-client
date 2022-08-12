import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
import { Button } from "@material-ui/core"

export const Register = () => {
  const username = useRef()
  const password = useRef()
  const history = useHistory()
  const firstName = useRef()
  const lastName = useRef()
  const bio = useRef()


  const handleRegister = (e) => {
    e.preventDefault()
    const newUser = {
      "username": username.current.value,
      "password": password.current.value,
      "first_name": firstName.current.value,
      "last_name": lastName.current.value,
      "bio": bio.current.value,
    }
    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token)
        history.push("/")
      }
    })
  }


  return (
    <main id="form-container">
      <form id="register-form">
        <h3 id="register">Register an account</h3>
        <fieldset>
          <label htmlFor="inputUsername">Username</label>
          <input ref={username} type="text" name="username" placeholder="Username" required />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input ref={password} type="password" name="password" placeholder="Password" required />
        </fieldset>
        <fieldset>
          <label htmlFor="inputFirstName"> First Name </label>
          <input ref={firstName} type="text" name="firstName" placeholder="First Name" required />
        </fieldset>
        <fieldset>
          <label htmlFor="inputLastName"> Last Name </label>
          <input ref={lastName} type="text" name="lastName" placeholder="Last Name" required />
        </fieldset>
        <fieldset id="bio">
          <label htmlFor="inputBio"> Quick Bio </label>
          <textarea ref={bio} type="text" name="bio" placeholder="Who am I..." required />
        </fieldset>
      </form>
      <Button variant="contained" className="login" onClick={handleRegister} type="submit">Register</Button>
      <section>
        Already registered? <Link to="/login">Login</Link>
      </section>
    </main>
  )
}
