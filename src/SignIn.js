import React, { useRef, useState} from 'react';
import { useAuth } from "./AuthContext.js";
import './SignIn.css';
import { Link, useHistory  } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

const SignIn = ({ identity }) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signUp(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }


  return(
    <div className="login">
        <div className='login__container'>
            <h1>{identity} Sign-In</h1>
            {error && <Alert variant="filled" severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <h5>E-mail</h5>
                <input type='email' ref={emailRef} required />

                <h5>Password</h5>
                <input type='password' ref={passwordRef} required />
                
                <h5>Re-enter Password</h5>
                <input type='password' ref={passwordConfirmRef} required />
                
                <button disabled={loading} type='submit' className='login__signInButton'>Sign In</button>
            </form>
            <p>
                Already have an account? <Link to="/login" >LogIn</Link>
            </p>
        </div>

    </div>
  )
  
};

export default SignIn;
