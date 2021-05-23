import React from "react"

function Animals(props) {
    return (
        <ul>
            {props.list.map((item) =>{ return (<li>{item}</li>) })}
        </ul>
    )
}

export default Animals