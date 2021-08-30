import React, { useRef, useState, useEffect} from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext.js"
import Alert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom';

const Login = ({ identity }) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, loginWithGmail, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

   
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }
      async function handleClick(e) {
        // e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await loginWithGmail()
          console.log(currentUser)
          history.push("/dashboard")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }

  return(
    <div className="login">
        <div className='login__container'>
            <h1>Log-in</h1>
            {error && <Alert variant="filled" severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit} >
                <h5>E-mail</h5>
                <input type='email' ref={emailRef} />

                <h5>Password</h5>
                <input type='password' ref={passwordRef} />

                <button disabled={loading} type='submit' className='login__signInButton'>Log In</button>
            </form>
            <button disabled={loading} onClick={handleClick} className='login__registerButton'>Log in with Google</button>
            {/* <p>
                By Log-in you agree to the MY-CLASSROOM Conditions of Use. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p> */}
            <Link to='/signin'>
                <button className='login__registerButton'>Create your My-Classroom Account</button>
            </Link>
        </div>

    </div>
  )
  
};

export default Login;
