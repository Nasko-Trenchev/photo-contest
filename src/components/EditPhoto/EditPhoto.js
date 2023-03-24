import styles from './EditPhoto.module.css'

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as ContestServie from '../../services/ContestService'

export default function EditPhoto() {
    const [currentPhoto, setCurrentPhoto] = useState({})
    const [currentInput, setCurrentInput] = useState({
        name: '',
        imageUrl: '',
        description: '',
        price: ''
    })
    const { photoId, categoryId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        ContestServie.getImageDetails(photoId)
            .then(result => {
                setCurrentPhoto(result);
            })
    }, [photoId])

    const handleChange = (e) => {
        setCurrentInput({
            ...currentInput,
            [e.target.id]: e.target.value,
        })
    }

    const submitChange = (e) => {
        e.preventDefault();
        ContestServie.editPhoto(photoId, { categoryId, ...currentInput })
            .then(result => {
            });

        navigate(`/photos/${photoId}`)
    }
    return (
        <>
            <h1 className={styles["paragraph"]}>Edit Photo</h1>
            <form className={styles["login-form"]} onSubmit={submitChange}>
                <label htmlFor="name">Photo name:</label>
                <input type="text" id="name" name="name" placeholder={currentPhoto.name} required value={currentInput.name} onChange={handleChange} />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder={currentPhoto.imageUrl} required value={currentInput.imageUrl} onChange={handleChange} />
                <label htmlFor="description">Photo description:</label>
                <input type="text" id="description" name="description" placeholder={currentPhoto.description} required value={currentInput.description} onChange={handleChange} />
                <label htmlFor="price">Photo price:</label>
                <input type="text" id="price" name="price" placeholder={currentPhoto.price} required value={currentInput.price} onChange={handleChange} />
                <button type="submit">Edit photo</button>
            </form>
        </>
    )
}