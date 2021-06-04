import React from 'react';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const Dashboard=(props) => {

    const [submiting, setSubmiting] = useState(false)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    
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
}, [])

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
    if (!values.title) errors.title="Wymagane";
    if (!values.author) errors.author="Wymagane";
    if (!values.genre) errors.genre="Wymagane";
    if (!values.date) errors.date="Wymagane";
    if (!values.description) errors.description="Wymagane";
    if (!values.coverImage) errors.coverImage="Wymagane";

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
        setSubmiting(false);
        resetForm();
    }).catch(err => {
        console.log(err.message);
        setSubmiting(false);
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
        setSubmiting(false);
        resetForm();
    }).catch(err => {
        console.log(err.message);
        setSubmiting(false);
    });
}
}}
>
<Form >
    <label htmlFor="title"> Tytuł: </label>
    <Field name="title"/>
    <ErrorMessage name="title" component="div"/>

    <label htmlFor="author"> Autor: </label>
    <Field name="author"/>
    <ErrorMessage name="author" component="div"/>

    <label htmlFor="genre"> Gatunek: </label>
    <Field name="genre"/>
    <ErrorMessage name="genre" component="div"/>

    <label htmlFor="date"> Data dodania: </label>
    <Field name="date"
    type="date"/>
    <ErrorMessage name="date" component="div"/>

    <label htmlFor="description"> Opis: </label>
    <Field name="description"/>
    <ErrorMessage name="description" component="div"/>

    <label htmlFor="coverImage"> Okładka: </label>
    <Field name="coverImage"/>
    <ErrorMessage name="coverImage" component="div"/>

    <button type='submit' disabled={submiting}> Zatwierdź </button>

</Form>
</ Formik>
</div>
)
}
export default Dashboard;