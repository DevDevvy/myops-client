import { Button, ButtonGroup } from "@mui/material"
import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <div>
        <ButtonGroup variant="text" >
          <Button><Link to="/" className="nav-buttons">Home</Link></Button>
          <Button><Link to="/tips" className="nav-buttons">Tips</Link></Button>
        </ButtonGroup>
      </div>
      <div>
        {
          localStorage.getItem("auth_token") !== null ?
            <Button
              variant="outlined"
              id="logout"
              onClick={() => {
                localStorage.removeItem("auth_token")
                history.push({ pathname: "/" })
              }}>
              Logout
            </Button>
            :
            <>
              <Button variant="outlined"><Link to="/login">Login</Link></Button>
              <Button variant="contained"><Link to="/register">Register</Link></Button>
            </>
        }
      </div>
    </nav>
  )
}
