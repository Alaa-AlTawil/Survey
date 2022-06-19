import React from 'react';
import Button from './Button';
import Header from './Header';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function AddSurvey() {
    const navigate = useNavigate();
    function AddSurvey(){
        var name=document.getElementById("surveyname")
        axios.post(`http://127.0.0.1:8000/api/addsurvey`, {name:name.value,})
        .then(res => {
            console.log("success")
            navigate('/addQuestions')
            
            
          
        })

    }
    return ( <div>
        <Header/>
        <div>
            <input type="text"  id="surveyname"/>
            <Button className="btn" text="Add" onclick={()=>{
                AddSurvey()
            }}/>
        </div>
        </div>);
}

export default AddSurvey;