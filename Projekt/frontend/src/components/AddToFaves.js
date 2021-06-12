import {useEffect, useState} from "react";
import { HiHeart } from "react-icons/hi";

const AddToFaves = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [fill, setFill] = useState("#fafafa");

    return(
    <div>
        <HiHeart className="heart" fill={fill} onMouseOver={() => setFill("#ff1178")} onMouseOut={() => setFill("#fafafa")} />
    </div>
)
}
export default AddToFaves;