import React from 'react';
import './CSS/LoginSignup.css';
const LoginSignup = () =>{
    return(
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name'/>
                    <input type="Email" placeholder='Your Email'/>
                    <input type="password" placeholder='Your Password'/>
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>Agree to condition of terms of service</p>
                </div>
            </div>
        </div>
    )
};
export default LoginSignup;