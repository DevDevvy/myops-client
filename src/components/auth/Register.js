import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
import Stack from "@mui/material/Stack"
import { Box, Button, TextField } from "@material-ui/core"
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
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

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        <label htmlFor="inputFirstName"> First Name </label>
        <input ref={firstName} type="text" name="firstName" placeholder="First Name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputLastName"> Last Name </label>
        <input ref={lastName} type="text" name="lastName" placeholder="Last Name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputLastName"> Quick Bio </label>
        <input ref={bio} type="text" name="bio" placeholder="Who am I..." required />
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
