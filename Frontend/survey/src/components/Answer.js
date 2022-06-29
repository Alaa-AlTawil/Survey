import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios';
function Answer({qid}){
    const [array,setarr]=useState([])
    useEffect(()=>{
        axios
        .post(`http://127.0.0.1:8000/api/getanswer`, {
          qid: qid,
        })
        .then((res) => {
          setarr(res.data["category"]);
          console.log(res.data["category"])
        //   for (var i=0;i<res.data["category"].length;i++){
        //     setarr(res.data["category"][i]["answer"])
        //   }
        }
        )
        ;
     
    },[])
    console.log(array)
    return(
    <div>  
        <div>
            {array.map((arritem) => ( 
            <div key={arritem.id}>    
            <div>{arritem.answer}</div>
            </div>
            ))}
        </div>
    </div>
        
    )
}
export default Answer