import { useState } from 'react';
import { HiStar } from "react-icons/hi";
const axios = require('axios');

const Rating = (props) => {
    const [pos, setPos]=useState(0);
    const voting = props.rel;
    console.log(props);
    const rate = (r) => {
        if(props.value === true){
            alert("Już głosowałeś!");
            return ;
        }
        axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {score: r})
        .then(() => {voting(true); 
        alert("Dziękujemy za oddanie głosu!");
        }).catch((e) => {console.log(e);
        alert("Niestety nie udało się oddać głosu.");
    });
};


    return(
    <div className="stars" onMouseLeave={()=>setPos(0)}>
        {Array(5).fill(undefined).map((_, i)=>(
            <HiStar onMouseOver={()=> setPos(i+1)} className={"ratingStar" + ((i+1 <= pos) ? " hovered" : "")} onClick={() => rate(i+1)} />
        ))}
    </div>
)
}
export default Rating;