import React, { useEffect } from 'react';
import {  useState } from "react";
import axios from "axios";


function Qoptions({qid,qtype}) {
    const [arr,setarr]=useState([])
    useEffect(()=>{
    axios.post(`http://127.0.0.1:8000/api/getquesoptions`,{qid:qid,ques_type_id:qtype})
        .then(res => {
            setarr(res.data["category"])
            console.log(res)
})},[])
    if(qtype==1){
        return(<div><input type="text"/></div>)
    }
    else if(qtype==2){
        return (<div>
             {arr.map((arr) => (
          <div key={arr.id}>
            <input type="radio" value={arr.option} name={qid} />{arr.option}
          </div>
        ))}
            
            </div>)
    }
}

export default Qoptions;