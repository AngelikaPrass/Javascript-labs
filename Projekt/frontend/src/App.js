import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Books from "./components/Books";
import BookDetail from "./components/BookDetail";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";

const App=()=>{
    const [dataChange, setDataChange] = useState(true);
    return (
        <BrowserRouter>
            <div className="App">
               <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/addbook">
                        <AddBook />
                    </Route>
                    <Route exact path="/editbook/:id">
                        <EditBook />
                    </Route>
                    <Route exact path="/books">
                        <Books />
                    </Route>
                    <Route exact path="/books/:id">
                        <BookDetail change={dataChange} callback={setDataChange} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;