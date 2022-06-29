import { React, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import '../App.css';
import Qoptions from "./Qoptions";
import Button from "./Button";
import Answer from "./Answer";
 function Questions() {
  const [arr, setarr] = useState([]);
 useEffect(()=>{
    axios
    .post(`http://127.0.0.1:8000/api/getquesofsurv`, {
      sid: localStorage.getItem("survid"),
    })
    .then((res) => {
      setarr(res.data["category"]);
    });
 },[])
  
  return (
    <div>
      <Header />
      <div className="bottom_line_black">
        {arr.map((arritem) => (
          <div key={arritem.id} >
            <div id={arritem.id} className="bottom_line_blue">{arritem.content}</div>
            <Answer qid={arritem.id}/>            
          </div>
        ))}
      </div>
     
      
    </div>
  );
}

export default Questions;
