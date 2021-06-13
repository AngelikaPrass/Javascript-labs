import React from 'react';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./Form.scss";

const Dashboard=(props) => {
    const [submiting, setSubmiting] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    let history = useHistory();
    
    useEffect(() => {
        console.log(props);
        if(props.type === "edit"){
            const RegExpNamedCaptureGroups = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/

            axios.get(`http://localhost:5000/api/book/${props.id}`)
            .then((res) => {
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setGenre(res.data.genre)
                const {groups: {month, day, year}} = RegExpNamedCaptureGroups.exec(res.data.release_date);
                setDate(`${year}-${month}-${day}`)
                setDescription(res.data.description)
                setCoverImage(res.data.image_url)
            })
            .catch(res=>console.log(res))
    }
}, [props])

const resetForm = () => {
    setTitle('');
    setAuthor('');
    setGenre('');
    setDate('');
    setDescription('');
    setCoverImage('');
};

return(
    <div className="form">
<Formik enableReinitialize initialValues={{
    title,
    author,
    genre,
    date,
    description,
    coverImage
}}
validate={(values)=>{
    const errors={};
    const hasNumber = /\d/;
    if (!values.title) errors.title="Wymagane";
    if(values.title.length > 50) errors.title="Za długi tytuł";
    if (!values.author) errors.author="Wymagane";
    if (hasNumber.test(values.author)) errors.author="Autor nie może mieć cyfry w imieniu / nazwisku";
    if(values.author.length > 100) errors.author="Za długie, podaj samo nazwisko lub inicjały i nazwisko";
    if (!values.genre) errors.genre="Wymagane";
    if(values.genre.length > 40) errors.genre = "Za długi gatunek";
    if(values.genre.length < 5) errors.genre = "Za krótki gatunek";
    if (!values.date) errors.date="Wymagane";
    if (Date.parse(values.date) > Date.now()) {
        errors.date = "Data nie może być późniejsza niż dzisiejsza";
    };
    if (!values.description) errors.description="Wymagane";
    if(values.description.length < 10) errors.description="Za krótki opis";
    if (!values.coverImage) errors.coverImage="Wymagane";
    if (!values.coverImage.includes("http://") && !values.coverImage.includes("https://")) errors.coverImage="Niepoprawny link";
    if(values.coverImage.length > 1000) errors.coverImage="Za długi link";
    if(values.coverImage.length < 20) errors.coverImage="Za krótki link";
    return errors; 
}}
onSubmit={(values) => {
    if(props.type === "add"){
        setSubmiting(true);
    axios.post("http://localhost:5000/api/book", {
        title: values.title,
        author: values.author,
        genre: values.genre,
        release_date: values.date,
        description: values.description,
        image_url: values.coverImage
    }).then(res => {
        console.log(res);
        setSubmiting(true);
        alert("Dodano książkę");
        history.push("/books");
        resetForm();
    }).catch(err => {
        console.log(err.message);
        setSubmiting(true);
    });
} else if(props.type === "edit"){
    setSubmiting(true);
    axios.put(`http://localhost:5000/api/book/${props.id}`, {
        title: values.title,
        author: values.author,
        genre: values.genre,
        release_date: values.date,
        description: values.description,
        image_url: values.coverImage
    }).then(res => {
        console.log(res);
        setSubmiting(true);
        resetForm();
        history.go(-1);
    }).catch(err => {
        console.log(err.message);
        setSubmiting(true);
    });
}
}}
>
<Form >
    <ul className="wrapper">
    <li className="form-row">
    <label htmlFor="title"> Tytuł: </label>
    <Field name="title"/>
    <ErrorMessage name="title" component="div" className="err"/>
    </li>

    <li className="form-row">
    <label htmlFor="author"> Autor: </label>
    <Field name="author"/>
    <ErrorMessage name="author" component="div" className="err"/>
    </li>

    <li className="form-row">
    <label htmlFor="genre"> Gatunek: </label>
    <Field name="genre"/>
    <ErrorMessage name="genre" component="div" className="err"/>
    </li>
    
    <li className="form-row">
    <label htmlFor="date"> Data dodania: </label>
    <Field name="date"
    type="date"/>
    <ErrorMessage name="date" component="div" className="err"/>
    </li>

    <li className="form-row">
    <label htmlFor="description"> Opis: </label>
    <Field name="description"
    as="textarea"
    rows="10"
    cols="43"/>
    <ErrorMessage name="description" component="div" className="err"/>
    </li>

    <li className="form-row">
    <label htmlFor="coverImage"> Link do okładki: </label>
    <Field name="coverImage"/>
    <ErrorMessage name="coverImage" component="div" className="err"/>

    </li>
    <li className="form-row">
    <button type='submit' disabled={submiting}> Zatwierdź </button>
    </li>
    
    </ul>
</Form>
</ Formik>
</div>
)
}
export default Dashboard;
