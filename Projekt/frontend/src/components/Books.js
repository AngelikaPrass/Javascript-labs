import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { HiFilter, HiSwitchVertical, HiOutlineTrash, HiHeart, HiOutlineHeart, HiSearch } from "react-icons/hi";
import ScrollButton from './ScrollButton';
import "./bookList.scss";
import "./Toolbar.scss";
import "./mobileList.scss";


const axios = require("axios");
const Books=() => {

    const [data, setData]=useState([]);
    const [sortingFunction, setSortingFunction] = useState(()=>()=>1);
    const [filterFunction, setFilterFunction ] = useState(() => () => true);
    const [toDelete, setToDelete] = useState(new Set());
    const [isLoading, setIsLoading]=useState(true);
    const [isError, setIsError]=useState(false);
    const [displayedData, setDisplayedData]=useState([]);
    const [authors, setAuthors] = useState(new Set());
    const [favourites, setFavourites] = useState(new Set());
    const [favFilter, setFavFilter]=useState(()=>()=>1);
    const [resetFavs, setResetFavs] = useState(true);
    const [byAuthor, setByAuthor ] = useState(() => () => 1);
    const [searchTerm, setSearchTerm] = useState("");
    const [color, setColor] = useState(false);


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
    const authorFilterMaker = (a) => {
        return (book) => {
            if(book.author === a || a==="") return true;
            else return false;
        };
    };

    useEffect(()=>{
        setDisplayedData([...data.filter(filterFunction).filter(favFilter).filter(byAuthor).sort(sortingFunction)]);
    }, [data, sortingFunction, favFilter, byAuthor, filterFunction]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/book").then(response => {
            setData(response.data);
            const author = new Set();
            const authorObject = response.data.reduce((acc, curr) => {
                if(curr.author in acc){
                    acc[curr.author] +=1;
                }
                else{
                    acc[curr.author] = 1;
                }
                return acc;
            }, {});
            for(let key in authorObject){
                if(authorObject[key] >= 2){
                    author.add(key);
                }
            }
            setAuthors(author);
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
    const massDelete = () => {
        for(const id of toDelete){
            axios.delete(`http://localhost:5000/api/book/${id}`)
            .then(res => {
                console.log(res.message);
            })
            .catch(err => {
                console.log(err.message);
            })
        }
        setData(data.filter(book => !toDelete.has(book.id)));
        const empty = new Set();
        setToDelete(empty);
        alert("Usunięto wszystkie zaznaczone książki.");
};

const handleClick = (id) => {
    const deleting = new Set(toDelete);
    if(toDelete.has(id)){
        deleting.delete(id);
    } else{
        deleting.add(id);
    }
    setToDelete(deleting);
};

const handleFavClick = (id) => {
    const favs = new Set(favourites);
    if(favourites.has(id)){
        favs.delete(id);
        setColor(false);
    }else{
        favs.add(id);
        setColor(true);
    }

    setFavourites(favs);
    console.log(favs);
};

const searching = (searchTerm) => {
    return (book) => {
        if(searchTerm === "") return true;
        else if(book.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return true;
        }
        else return false;
    }
};

const displayFavourites = () => {
    if(!resetFavs){
        setFavFilter(() => (book) => {
            return true;
        });
        setResetFavs(true);
    }

    else{
        setFavFilter(()=>(book) => {
            if(favourites.has(book.id)) return true;
            else return false;
        })
        setResetFavs(false);
    }
};


return (
    <div>
        <div className="toolbar">
            <div className="showFavourites">
                <p>Ulubione: </p>
               <HiOutlineHeart className="point" onClick={displayFavourites} />
            </div>
            <div className="filter">
                <HiFilter  />
                <select name="filterDropdown" onChange={filterType} defaultValue={"brak"} >
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
            <div className="authors">
                <p> Filtruj po autorach: </p>
                    <form>
                    <ul>
                    {Array.from(authors).map(author => (
                        <li> 
                            <input type="radio" name="radio" value={author} onClick={(e) => setByAuthor(() => authorFilterMaker(e.target.value))}></input>
                            <label htmlFor={author}> {author} </label>
                        </li>
                    ))}
                        <li> 
                            <input type="radio" name="radio" value={""} onClick={(e) => setByAuthor(() => authorFilterMaker(e.target.value))}></input>
                            <label> nie filtruj </label>
                        </li>
                    </ul>
                    </form>
                </div>
            <div className="search">
            <HiSearch />
                <input type="text" placeholder="Wyszukaj..." onChange={e => {
                    setSearchTerm(e.target.value)
                setFilterFunction(() => searching(e.target.value))
                }}/>
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
        </div>
        <div className="deleteButton">
        <button onClick={() => massDelete()}> Usuń wszystkie zaznaczone </button>
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
                    <h5> {new Date(book.release_date).toLocaleDateString('en-CA')} </h5>
                    </div>
                    <div className="rating">
                        <p> ocena: {book.rating ? book.rating.toString().slice(0, 3) : "0"} / 5 </p>
                        <HiHeart className={"point" + ((favourites.has(book.id)) ? " filled" : "")} onClick={() => handleFavClick(book.id)}/>
                    </div>
                    <div className="checkbox"> 
                        <HiOutlineTrash />
                        <input className="point" type="checkbox" value="checkbox" onClick={() => handleClick(book.id)}/>
                        <label htmlFor="massdelete"></label>
                    </div>
                </div>
            ))}
            <ScrollButton />
        </div>
    </div>
    );
};
export default Books;