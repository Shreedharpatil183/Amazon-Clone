import { Link } from '@material-ui/core'
import { auth } from './firebase'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css'
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        
        event.preventDefault()  //this stops refresh
        //do login logic
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)=> {
            //logged in succesfully to home page...
            history.push('/')

        })
        .catch((e) => alert(e.message))

    }

    const register = (event) => {
        event.preventDefault()  //this stops refresh
        //do register logic
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=> {
            //created user and loggedin and redirected to the homepage
        })
        .catch((e)=> alert(e.message))
        
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                <h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit" className="login__signin">Sign In</button>


                </form>

                <p>
                    By signing in you agree to Amazon's Condition and terms see our privacy Notice ou cookies and our internet based ads Notice
                </p>

                <button onClick={register} type="submit" className="login__register">Create Your Amazon Account</button>
                

            </div>
        </div>
    )
}

export default Login
