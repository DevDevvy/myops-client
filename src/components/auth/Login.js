import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import { loginUser } from "./AuthManager"
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Login = () => {
  const invalidDialog = useRef()
  const history = useHistory()
  const [values, setValues] = useState({
    password: '',
    username: '',
    showPassword: false,
  });
  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: values.username,
      password: values.password
    }

    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("auth_token", res.token)
          history.push("/")
        }
        else {
          invalidDialog.current.showModal()
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
    <main >
      <dialog ref={invalidDialog} >
        <div id="dialog-container">
          <div>Username or password was not valid.</div>
          <Button id="close" size="small" variant="outlined" onClick={e => invalidDialog.current.close()}>Close</Button>
        </div>
      </dialog>
      <div className="login-container">
        <Box component="form" onSubmit={handleLogin} sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} className="sign-in-container">
          <h3>MyOps Sign In</h3>
          <TextField
            label="Username" type="username"
            onChange={handleChange('username')}
            id="username" required autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard">
          </TextField>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            id="password" placeholder="Password" required
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button variant="contained" type="submit" id="sign-in-button">Sign In</Button>

          <section>
            <Link to="/register">Not a member yet?</Link>
          </section>
        </Box>
      </div>
    </main>
  )
}
