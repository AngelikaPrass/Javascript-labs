import { useState, useEffect } from 'react';
import { HiStar } from "react-icons/hi";
const axios = require('axios');
const Rating = (props) => {
    const [fill, setFill] = useState("");
    const rate = (r) => {
        axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {score: r})
        setFill("#01fff4");
    };

    return(
    <div className="stars">
    <HiStar className="ratingStar" fill={fill} onClick={() => rate(1)} /> <HiStar className="ratingStar" fill={fill} onClick={() => rate(2)} /> <HiStar className="ratingStar" fill={fill} onClick={() => rate(3)}/> <HiStar className="ratingStar" fill={fill} onClick={() => rate(4)}/> <HiStar className="ratingStar" fill={fill} onClick={() => rate(5)}/> 
</div>
)
}
export default Rating;