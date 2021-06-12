import { HiSwitchVertical } from "react-icons/hi";
import {useEffect, useState} from "react";

const Sort = (props) => {
    const [sortingFunction, setSortingFunction] = useState("");
    const callback = props.callback;
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

    const sortingType = (element) => {
        if(element.target.value ==="alphabetASC") setSortingFunction(() => alphabeticalSortAsc);
        else if(element.target.value ==="alphabetDESC") setSortingFunction(() => alphabeticalSortDesc);
        else if(element.target.value ==="releaseDateASC") setSortingFunction(() => dateSortAsc);
        else if(element.target.value ==="releaseDateDESC") setSortingFunction(() => dateSortDesc);
        else if(element.target.value ==="authorASC") setSortingFunction(() => authorSortAsc);
        else if(element.target.value ==="authorDESC") setSortingFunction(() => authorSortDesc);
    }
    useEffect(() => {
        callback(sortingFunction)
    }, [sortingFunction])

    return(
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
    )
}
export default Sort;