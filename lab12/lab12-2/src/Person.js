import React from "react"

function Person(props){
    const {imie, nazwisko, wiek} = props.input;

    return (
        <div>
            <p>{imie}</p>
            <p>{nazwisko}</p>
            <p>{wiek}</p>
        </div>
    )
}

export default Person