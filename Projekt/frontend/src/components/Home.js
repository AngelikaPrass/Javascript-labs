import { Link } from "react-router-dom";
import "./Home.scss";

const Home=()=>{
    return (
        <div className="home">
            <div className="homeWrapper">
            <h1> Katalog książek </h1>
            <div> </div>
            <Link to="/books"> <button> Katalog &gt; </button> </Link>
            </div>
        </div>
    );
};

export default Home;