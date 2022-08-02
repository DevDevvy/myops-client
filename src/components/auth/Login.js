import "./Auth.css"
import { loginUser } from "./AuthManager"
import { Link, useHistory } from "react-router-dom"
import React, { useRef } from "react"
import { Button } from "@material-ui/core"

export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
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

  return (
    <main >
      <dialog ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>
      <section className="sign-in-container">
        <form onSubmit={handleLogin}>
          <fieldset>
            <label htmlFor="inputUsername"> Username</label>
            <input ref={username} type="username" id="username" placeholder="Username" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input ref={password} type="password" id="password" placeholder="Password" required />
          </fieldset>
          <fieldset className="button-container">
            <Button variant="contained" onClick="void(0)" className="login" type="submit">Sign In</Button>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  )
}