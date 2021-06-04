import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

const Books=() => {
    const [data, setData]=useState([]);
    // const [sortingFunction, setSortingFunction] = useState("");
    const [isLoading, setIsLoading]=useState(true);
    const [isError, setIsError]=useState(false);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/book").then(response => {
            setData(response.data);
            setIsLoading(false);
            setIsError(false);
        }).catch(err => {
            console.log(err.message);
            setIsError(true);
            setIsLoading(false);
        })
    }, []);

    // const sortingType = (element) => {
    //     if(element.target.value ==="alphabet") setSortingFunction(() => alphabeticalSort);
    //     else if(element.target.value ==="releaseDate") setSortingFunction(() => dateSort);
    //     else if(element.target.value ==="author") setSortingFunction(() => authorSort);
    // }
    // useEffect(() => {
    //     let lista = [];
    //     switch(sortingType){
    //         case '':;
    //         case 'alphabeticalSort': ;
    //         case 'dateSort':;
    //         case 'authorSort':;
    //     }
    //     return () => {
    //     }
    // }, [sortingType])

    return (
        <div>
            <div className="filter"> filtrowanie (to do) </div>
        <div className="books-list">
            {/* <div className="sorting"> 
            <select name="sort" onChange={sortingType}>
                  <option value="alphabet"> alfabetycznie </option>
                  <option value="releaseDate"> data wydania </option>
                  <option value="author">autor</option>
            </select> 
            </div> */}
            {isError && <div>jest błąd</div>}
            {isLoading && <div>Ładowanie...</div>}
            {!isLoading && !isError && data.map((book)=>(
                <div key={book.id} className="book">
                    <img src = {book.image_url} alt="okładka książki"/>
                    <div className="wrapper-author">
                    <Link to={`/books/${book.id}`}>
                    <h2 className="title">{book.title}</h2>
                    </Link>
                    <h3 className="author">{book.author}</h3>
                    </div>
                    <div className="wrapper-genre">
                    <h4> {book.genre} </h4>
                    <h4> {book.release_date.slice(0, 10)} </h4>
                    <p> {book.rating} </p>
                    </div>
                    <br />
                </div>
            ))}
        </div>
        </div>
    );
};

export default Books;