import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AlertContext } from '../../contexts/AlertContext'

import styles from './EditPhoto.module.css'

import { getImageDetails, editPhoto } from '../../services/PhotoService'

export default function EditPhoto() {
    const [currentPhoto, setCurrentPhoto] = useState({})
    const [formInput, setformInput] = useState({
        name: '',
        imageUrl: '',
        description: '',
    })
    const { photoId, categoryId } = useParams();
    const { setAlertState } = useContext(AlertContext)
    const navigate = useNavigate();
    useEffect(() => {
        getImageDetails(photoId)
            .then(result => {
                setCurrentPhoto(result);
            })
    }, [photoId])

    const handleChange = (e) => {
        setformInput({
            ...formInput,
            [e.target.id]: e.target.value,
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (formInput.name.length < 3) {
            setAlertState({ message: 'Name should be at least 3 characters long!', show: true })
            setformInput({
                name: '',
                imageUrl: '',
                description: ''
            })
            return;
        }

        const validPhoto = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi.test(formInput.imageUrl)
        if (!validPhoto) {
            setAlertState({ message: 'Invalid photo URL', show: true })
            setformInput({
                name: '',
                imageUrl: '',
                description: ''
            })
            return;
        }

        if (formInput.description.length < 5) {
            setAlertState({ message: 'Description should be at least 5 characters long!', show: true })
            setformInput({
                name: '',
                imageUrl: '',
                description: ''
            })
            return;
        }
        editPhoto(photoId, { categoryId, ...formInput })
            .then(() => {
            });

        navigate(`/photos/${photoId}`)
    }
    return (
        <>
            <h1 className={styles["paragraph"]}>Edit Photo</h1>
            <form className={styles["login-form"]} onSubmit={onFormSubmit}>
                <label htmlFor="name">Photo name:</label>
                <input type="text" id="name" name="name" placeholder={currentPhoto.name}
                 value={formInput.name} onChange={handleChange} />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder={currentPhoto.imageUrl}
                 value={formInput.imageUrl} onChange={handleChange} />
                <label htmlFor="description">Photo description:</label>
                <input type="text" id="description" name="description" placeholder={currentPhoto.description} 
                value={formInput.description} onChange={handleChange} />
                <button type="submit">Edit photo</button>
            </form>
        </>
    )
}