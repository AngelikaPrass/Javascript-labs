zad6 
import React from "react"
import { useState } from 'react'

function Zad6() {
    let [list, setList] = useState([])

    // const listItems = list.map((e) => <li> {e} </li>);
    // ReactDOM.render(<ul>{listItems}</ul>, 
    // document.getElementById('div6'));

    return(
        <div id='div6'>
            <input id='zad6' type='text'></input>
            <button onClick = {() => {
                const y = document.getElementById('zad6').value;
                setList([...list, y]);
                document.getElementById('zad6').value = '';
            }}>Send</button>
            <br></br>
            <ul>
                {list.map( item => {return (<li>{item}</li>)})}
            </ul>
        </div>
    );
}

export default Zad6