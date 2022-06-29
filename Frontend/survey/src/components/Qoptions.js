import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Button from "./Button";

function Qoptions({ qid, qtype }) {
    
  const [arr, setarr] = useState([]);
  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/getquesoptions`, {
        qid: qid,
        ques_type_id: qtype,
      })
      .then((res) => {
        setarr(res.data["category"]);
        console.log(res);
      });
  }, []);
  if (qtype == 1) {
    // function getans() {
    //     return ("ddsncjhsdbchjds")
    // }
    //document.getElementById("submit").addEventListener("click",()=>{
    function submit_One(){  
    axios
      .post(`http://127.0.0.1:8000/api/addanswer`, {
        answer: document.getElementById("answer").value,
        sid: localStorage.getItem("survid"),
        qid: qid,
        uid: localStorage.getItem("userid")
      })}
   /// })
    return (
      <div>
        <input type="text" id="answer"/>
        <Button onclick={()=>{submit_One()}}/>
      </div>
    );
  } else if (qtype == 2) {
    return (
      <div>
        <div>
          {arr.map((arr) => (
            <div key={arr.id}>
              <input type="radio" value={arr.option} name={qid} />
              {arr.option}
            </div>
          ))}
        </div>
        <div>
          <Button text="submit" id={qid}  />
        </div>
      </div>
    );
  }
}

export default Qoptions;
