import React from "react"
import { useState } from 'react'

function About() {
    let napis = "tytuł";
    let [form, setForm] = useState("");
    let list = [];
    return(
        <div>
            <h1>{napis}</h1>
            <button onClick={() => {alert("Kliknięto")}}>Button</button><br></br>
            <input id="zad5" type="text" /*onChange={(x) => {setForm(x.target.value)}}*/></input>
            <button onClick={() => {
                const x = document.getElementById("zad5").value;
                setForm(x);
                }}>Send</button>
            <p>{form}</p>
            <br></br>
        </div>    
    )
}

export default About