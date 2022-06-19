import { React, useState, useEffect } from "react";
import Survey from './Survey';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function Surveys() {
    const navigate = useNavigate();
    const [arr, setarr] = useState([]);
    function questions(n){
        localStorage.setItem("survey_id",n)
        navigate('/surveyquestion')
   }
    function getsurveys(){ 
     axios.get(`http://127.0.0.1:8000/api/getallsurveys`)
        .then(res => {
            setarr(res.data["category"])

        })}
    useEffect(()=>{getsurveys()},[])   
    
    
    return (
        <div>
            <Button className={'btn'} text={'Create Survey'}  onclick={ ()=>{
            navigate('./addsurvey')
        }}/>
        <div id='Container' >
            {arr.map((value,index)=>{
                    return (
                        <Survey key={index} name={value["name"]} id={value["id"]} click={()=>{questions(value["id"])}}/>
                    )})}
        </div>
        </div>
     );}

export default Surveys;