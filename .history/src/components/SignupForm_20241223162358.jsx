import React from 'react';
import { auth } from '../firebase/init'

const SignupForm = () => {
    return (
        <div className='signup_form'>
            <h2>Sign Up!</h2>
        <div className="signup_inputs">
            <input type="text" placeholder='Username' />
            <input type="text"
            placeholder='Email' />
            <input placeholder='Password' type="text" />
           <button>Sign Up</button> 
        </div>
        </div>
    );
}

export default SignupForm;
