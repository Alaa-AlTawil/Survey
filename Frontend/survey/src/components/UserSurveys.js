import UserSurvey from './UserSurvey';
import axios from 'axios';
import { React, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
function UserSurveys() {
    const navigate = useNavigate();
    function questions(n){
        localStorage.setItem("survid",n)
        navigate('/questions')
   }
    const [arr, setarr] = useState([]);
    function getsurveys(){ 
     axios.get(`http://127.0.0.1:8000/api/getallsurveys`)
        .then(res => {
            setarr(res.data["category"])

        })}
    useEffect(()=>{getsurveys()},[])   
    return (
        <div>
        <div id='Container' >
            {
                arr.map((value,index)=>{
                    return (
                        <UserSurvey key={index} name={value["name"]} id={value["id"]} click={()=>{questions(value["id"])}}/>
                    )
                })
            }



            {/* <UserSurvey name='survey1'/>
            <UserSurvey name='survey2'/>
            <UserSurvey name='survey3'/>
            <UserSurvey name='survey4'/>
            <UserSurvey name='survey5'/> */}
        </div>
        </div>
     );
}

export default UserSurveys;