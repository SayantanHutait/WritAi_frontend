import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("");

    const login = (username, password) => {
        fetch(import.meta.env.VITE_REGISTER_URL, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user_id:username, password:password})
        })
        .then((response) => {
            if(!response.ok)
                throw new Error("Username already exists");
            return response.json()
        })
        .then((data) => {
            navigate('/login')
        })
        .catch((err) => {
            setError(err.message);
        })
    }
    return(

        <motion.div
        initial={{ opacity: 0, y: 50 }}       // Start slightly below
        animate={{ opacity: 1, y: 0 }}        // Slide up into place
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <div className="login-container1">
            <h3>Sign Up</h3>
            <form className="login-container" onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                login(form.username.value, form.password.value)
            }}>
                {error ? <div style={{color:"red"}}>{error}</div> : null}
                <label htmlFor="username">Username</label>
                <input type="text" id='username' name='username' required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
                <button type="submit">SignUp</button>
            </form>
            <div>Already have an account? <a href="/login">Login</a></div>
       
        </div>
        </motion.div>
    )
}

export default Signup