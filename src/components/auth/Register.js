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
  const [values, setValues] = useState({
    password: '',
    username: '',
    first_name: '',
    last_name: '',
    bio: '',
    showPassword: false,
  });

  const handleRegister = (e) => {
    e.preventDefault()
    const newUser = {
      "username": values.username,
      "password": values.password,
      "first_name": values.first_name,
      "last_name": values.last_name,
      "bio": values.bio,
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
    <Box className="login-container" component="form" onSubmit={handleRegister}>
      <Stack 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          color: "white"
          }} 
        >
        <h3>Register an account</h3>

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
        <TextField color="primary" onChange={handleChange('first_name')} label="First Name" required />
        <TextField onChange={handleChange('last_name')} label="Last Name" required />
        <TextField onChange={handleChange('bio')} label="Bio" minRows={6} multiline required />
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
          <Button type="submit">Register</Button>
          Already registered? <Link to="/login">Login</Link>
      </Stack>
    </Box>
  )
}
