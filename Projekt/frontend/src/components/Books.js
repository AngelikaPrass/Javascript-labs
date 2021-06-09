import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { HiFilter, HiSwitchVertical } from "react-icons/hi";
import ScrollButton from './ScrollButton';

const axios = require("axios");
const Books=() => {

    const [data, setData]=useState([]);
    const [sortingFunction, setSortingFunction] = useState(()=>()=>1);
    const [filterFunction, setFilterFunction ] = useState(() => () => true);


    const [isLoading, setIsLoading]=useState(true);
    const [isError, setIsError]=useState(false);
    const [displayedData, setDisplayedData]=useState([]);

    const alphabeticalSortAsc = (book1, book2) => { 
        return '' + book1.title.localeCompare(book2.title);
    }
    const alphabeticalSortDesc = (book1, book2) => { 
        return '' + book2.title.localeCompare(book1.title);
    }

    const dateSortAsc = (book1, book2) => {
        return '' + book1.release_date.localeCompare(book2.release_date);
    }
    const dateSortDesc = (book1, book2) => {
        return '' + book2.release_date.localeCompare(book1.release_date);
    }
    const authorSortAsc = (book1, book2) => {
        return '' + book1.author.localeCompare(book2.author);
    }
    const authorSortDesc = (book1, book2) => {
        return '' + book2.author.localeCompare(book1.author);
    }
    const genreFilterMaker = (g) => {
        return (book) => {
            if(book.genre === g) return true;
            else return false;
        };
    };


    useEffect(()=>{
        setDisplayedData([...data.filter(filterFunction).sort(sortingFunction)]);
    }, [data, sortingFunction, filterFunction]);

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

    const sortingType = (element) => {
        if(element.target.value ==="alphabetASC") setSortingFunction(() => alphabeticalSortAsc);
        else if(element.target.value ==="alphabetDESC") setSortingFunction(() => alphabeticalSortDesc);
        else if(element.target.value ==="releaseDateASC") setSortingFunction(() => dateSortAsc);
        else if(element.target.value ==="releaseDateDESC") setSortingFunction(() => dateSortDesc);
        else if(element.target.value ==="authorASC") setSortingFunction(() => authorSortAsc);
        else if(element.target.value ==="authorDESC") setSortingFunction(() => authorSortDesc);
    }
    const filterType = (e) => {
        if (e.target.value ==="") setFilterFunction(() => () => true);
        else setFilterFunction(()=>genreFilterMaker(e.target.value));
    }

    return (
        <div>
            <div className="filter">
                <HiFilter />
            <select name="filterDropdown" onChange={filterType} defaultValue={"brak"}>
                <option value=""> - </option>
                <option value="horror"> horror </option>
                <option value="science-fiction"> science-fiction </option>
                <option value="poezja"> poezja </option>
                <option value="romans"> romans </option>
                <option value="fantasy"> fantasy </option>
                <option value="literatura dziecięca"> literatura dziecięca </option>
                <option value="literatura młodzieżowa"> literatura młodzieżowa </option>
                <option value="literatura piękna"> literatura piękna </option>
                <option value="kryminał"> kryminał </option>
                <option value="fantastyka"> fantastyka </option>
                <option value="literatura faktu"> literatura faktu </option>
            </select>
            </div>

            <div className="sorting">
                <HiSwitchVertical /> 
            <select name="sort" onChange={sortingType} defaultValue={"brak"}>
                    <option value="nie sort"> - </option>
                  <option value="alphabetASC"> Alfabetycznie rosnąco </option>
                  <option value="alphabetDESC"> Alfabetycznie malejąco </option>
                  <option value="releaseDateASC"> Data wydania rosnąco </option>
                  <option value="releaseDateDESC"> Data wydania malejąco </option>
                  <option value="authorASC"> Autor rosnąco </option>
                  <option value="authorDESC"> Autor malejąco </option>
            </select> 
            </div>
        <div className="books-list">
            {isError && <div> Wystąpił błąd </div>}
            {isLoading && <div> Ładowanie... </div>}
            {!isLoading && !isError && displayedData.map((book)=>(
                <div key={book.id} className="book">
                    <img src = {book.image_url} alt="okładka książki"/>
                    <div className="wrapper-author">
                    <Link to={`/books/${book.id}`}>
                    <h3 className="title">{book.title}</h3>
                    </Link>
                    <h4 className="author">{book.author}</h4>
                    </div>
                    <div className="wrapper-genre">
                    <h5> {book.genre} </h5>
                    <h5> {book.release_date.slice(0, 10)} </h5>
                    <p> {book.rating} </p>
                    </div>
                    <br />
                </div>
            ))}
            <ScrollButton />
        </div>
        </div>
    );
};

export default Books;