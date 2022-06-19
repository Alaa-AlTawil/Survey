import React from 'react';
import Button from './Button';
import Header from './Header';
import axios from 'axios';
function Options() {
    function AddOption(){
        var options=document.getElementById("options")
        axios.post(`http://127.0.0.1:8000/api/addquesoption`, {option:options.value,questionid:localStorage.getItem("questionid")})
    .then(res => {
        window.location.reload();
    })
    }
    return ( <div>
        <Header/>
        <div >
            <input type="text" id="options"/>
            <Button text="add" onclick={()=>{
                AddOption()
            }}/>
        </div>
        </div>);
}

export default Options;