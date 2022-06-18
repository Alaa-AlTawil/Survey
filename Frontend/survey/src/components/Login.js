import React from 'react';
import Button from './Button'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    async function loginfunction(){
        let email=document.getElementById("email")
        let password=document.getElementById("password")
        await axios.post(`http://127.0.0.1:8000/api/auth/login`, {email:email.value, 
        password:password.value})
        .then(res => {
          console.log(res.data["user"]["type"]);
          if (res.data["user"]["type"]=="admin"){
            navigate('/home')
          }
          else{navigate('/user')
        }
        })

    }
    return (  
        <div className="login">
            <h1>Login</h1>
                <div><input id="email" type={'Email'} placeholder='Email'/></div>
                <div><input id="password" type={'Password'} placeholder='password'/></div>
                <div><Button text={'login'} onclick={()=>{loginfunction()}} /></div>
                
        </div>
    );
}

export default Login;