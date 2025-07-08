import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function Login(prop) {
    const[demo, setdemo] = useState("")
    const navigate = useNavigate()

    const login = (username, password) => {
        fetch(import.meta.env.VITE_LOGIN_URL, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user_id:username, password:password})
        })
        .then((response) => {
            if(!response.ok)
                throw new Error("Wrong username or password");
            return response.json()
        })
        .then((data) => {
            sessionStorage.setItem('token', data.access_token)
            prop.setAuth(true)
            navigate('/chat')
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }}       // Start slightly below
        animate={{ opacity: 1, y: 0 }}        // Slide up into place
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <div className="login-container1">
            <h3>Login</h3>
            <form className="login-container" onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                login(form.username.value, form.password.value)
            }}>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' name='username' required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
                <button type="submit">Login</button>
            </form>
            <div>Don't have an account? <a href="/signup">Sign Up</a></div>
       
        </div>
        </motion.div>
    )
}

export default Login