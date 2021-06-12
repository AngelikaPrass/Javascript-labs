import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";
const EditBook = () => {
    const { id } = useParams();
    return(
        <div className="form-title"> 
        <h3> Edytuj książkę </h3>
        <Dashboard type="edit" id={id} />
    </div>
    )
} 
export default EditBook;