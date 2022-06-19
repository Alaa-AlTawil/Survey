import React from 'react';
import Button from './Button'
import axios from 'axios';

function Survey(props) {
    function deleteSurvey(n){
     axios.post(`http://127.0.0.1:8000/api/delsurveybyid`, {survid:n})
        .then(res => {
        console.log(props.id)  
        window.location.reload();
          
        })

    }
    return (
        <div className='survey' onClick={props.click}>
            <div className="main_survey" >
                {props.name}
            </div>
            <div className="remove">
                <Button className="btn" text={"remove"} id={props.id} onclick={()=>{
                    deleteSurvey(props.id)
                }} />
            </div>
        </div>
        
    );
}

export default Survey;