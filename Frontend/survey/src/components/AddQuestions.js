import React from 'react';
import Button from './Button';
import Header from './Header';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddQuestions() {
    const navigate = useNavigate();
function AddQuestion(){
    var ques=document.getElementById("question")
    var sel=document.getElementById("selection")
    axios.post(`http://127.0.0.1:8000/api/addques`, {content:ques.value,qtid:sel.value,sid:localStorage.getItem("surveyid")})
    .then(res => {
        localStorage.setItem("questionid",res.data["question"]["id"])
        
    })
    if (sel.value==2){
        navigate('/option')
    }
    ques.value=""
}

return ( <div>
        <Header/>
        <input type="text" id="question" placeholder='your question'/>
            <div >
            <select name="type" id="selection">
                <option value="1">text</option>
                <option value="2">radio</option>
            </select>
            <Button className="btn" text="Add" onclick={()=>{
                AddQuestion()
            }}/>
        </div>
        </div>);
}

export default AddQuestions;