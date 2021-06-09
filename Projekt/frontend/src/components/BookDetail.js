import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const axios = require('axios');

const BookDetail = () => {
    const [bookDetail, setBookDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    let history = useHistory();

    const {id} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${id}`).then(res => {
            setBookDetail(res.data);
            setIsLoading(false);
            setIsError(false);
        }).catch(err => {
        console.log(err.message);
        setIsError(true);
        setIsLoading(false);

    })}, [id])

    const deleteBook = () => {
        return(
            axios.delete(`http://localhost:5000/api/book/${id}`)
            .then(res => {
                console.log(res.message);
                alert("Książka została usunięta");
                history.go(-1);
            })
            .catch(err => {
                console.log(err.message);
            })
        )
    };

    return(
        <div>
            {isError && <div>jest błąd</div>}
            {isLoading && <div>Ładowanie...</div>}
            {!isLoading && !isError &&
            <div className="bookDetail">
            <img src={bookDetail.image_url} alt="okładka książki"/>
            <div className="wrapper-author">
            <h2> {bookDetail.title} </h2>
            <h4> {bookDetail.author} </h4>
            <div> {bookDetail.release_date.slice(0, 10)} </div>
            </div>
            <div className="description">
            <p> {bookDetail.description} </p>
            </div>
            <div className="rating"> {bookDetail.rating} rate </div>
            <div className="buttons">
            <button onClick={deleteBook}> Usuń </button>
            <Link to={`/editbook/${id}`}>
            <button> Edytuj </button>
            </Link>
            </div>
            </div> 
            }
        </div>
    )
}
export default BookDetail;