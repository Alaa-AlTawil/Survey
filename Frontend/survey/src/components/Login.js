import React from 'react';
import Button from './Button'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    async function loginfunction(){
        let email=document.getElementById("email")
        let password=document.getElementById("password")
        await axios.post(`http://127.0.0.1:8000/api/auth/login`, {email:email.value, 
        password:password.value})
        .then(res => {
          localStorage.setItem("userid",res.data["user"]["id"])
          if (res.data["user"]["type"]==="admin"){
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
                <div><Button className="btn" text={'login'} onclick={()=>{loginfunction()}} /></div>
                
        </div>
    );
}

export default Login