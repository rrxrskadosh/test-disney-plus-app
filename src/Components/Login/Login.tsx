import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");

    return(
        
        <div className="login">
            <div className='container-logo'>
                <img className="logo" src="/images/logo.png" alt="" />
            </div>
            <form className="login-form">
                <h3>Login Here with your email</h3>
                <input 
                    type="email" 
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">GET ALL THERE</button>
            </form>
        </div>
    )
}

export default Login;