import styles from './EditPhoto.module.css'

import { useState } from "react";
import { useParams } from "react-router-dom";

import * as ContestServie from '../../services/ContestService'

export default function EditPhoto() {
    const [currentInput, setCurrentInput] = useState({
        name: '',
        imageUrl: '',
        description: '',
        price: ''
    })

    console.log(currentInput.name, currentInput.imageUrl)
    const {photoId, categoryId} = useParams();
    console.log(categoryId);
    const handleChange = (e) => {
        setCurrentInput({
            ...currentInput,
            [e.target.id]: e.target.value,
        })
    }

    const submitChange = (e) => {
        e.preventDefault();
        ContestServie.editPhoto(photoId, {categoryId, ...currentInput})
        .then(result => {
            console.log(result);
        })
    }
    return (
        <>
            <h1 className={styles["paragraph"]}>Edit Photo</h1>
            <form className={styles["login-form"]} onSubmit={submitChange}>
                <label htmlFor="name">Photo name:</label>
                <input type="text" id="name" name="name" required value={currentInput.name} onChange={handleChange} />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" required value={currentInput.imageUrl} onChange={handleChange} />
                <label htmlFor="description">Photo description:</label>
                <input type="text" id="description" name="description" required value={currentInput.description} onChange={handleChange} />
                <label htmlFor="price">Photo price:</label>
                <input type="text" id="price" name="price" required value={currentInput.price} onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
        </>
    )
}