import Dashboard from "./Dashboard"

const AddBook=()=>{
    return (
        <div className="form-title"> 
            <h3> Dodaj książkę </h3>
            <Dashboard type="add" />
        </div>
    );
};

export default AddBook;