import React from 'react';
import Button from './Button'
import {Link} from 'react-router-dom'
function Login() {
    return (  
        <div className="login">
            <h1>Login</h1>
                <div><input type={'Email'} placeholder='Email'/></div>
                <div><input type={'Password'} placeholder='password'/></div>
            <Link to={'./home'}>
                
                <div><Button text={'login'} /></div>
            </Link>
        </div>
    );
}

export default Login;