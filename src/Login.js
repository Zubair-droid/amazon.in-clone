/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";

import  "./Login.css";



function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const login = e => {
        e.preventDefault()
    
         /// Some firebase login.......
         auth
             .signInWithEmailAndPassword(email,password)
             .then(auth => {
                 history.push('/')
             })
             .catch(error => alert(error.message))
     }

     const register = e => {
        e.preventDefault()
    
        /// Some firebase sign up
        auth
             .createUserWithEmailAndPassword(email, password)
             .then((auth) =>{
                 console.log(auth);
                 if( auth ){
                    history.push('/')
                 }
             })
             .catch(error => alert(error.message))
     }
    return (
        <div className = "login">
        <Link to = "/">
        <img 
        className = "login_logo"
        src = "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-salary-png-logo-vector-5.png" 
        alt = ""  />
        </Link>


        <div className = "login_container">
         <h1>Sign-in</h1>
         <form>
             <h5>E-mail</h5>
             <input 
             type = "text" 
             value = {email} 
             onChange = {event => setEmail(event.target.value)} />
             
             <h5>Password</h5>
             <input 
             type = "password" 
             value = {password} 
             onChange = {event => setPassword(event.target.value)} />
             
             <button onClick = {login} type = "submit" className = "login_signInButton">Sign In</button> 
         </form>
             <p><input type = "checkbox"/> By signing in, you agree to AMAZON conditions of Use & Sale.
             Please read our Privacy Notice, Cookies Notice </p>       
             
             <button onClick = {register} className = "login_registerButton">Create your amazon account</button>
        </div>
        </div>
    );
}

export default Login;
