import { useParams, useNavigate } from 'react-router-dom';

import styles from './CreatePhoto.module.css'

import { createPhoto } from '../../services/PhotoService';


export default function CreatePhotos() {

    const { categoryId } = useParams();
    const navigate = useNavigate();

    const submitCategory = e => {
        e.preventDefault();

        const {
            name,
            imageUrl,
            description,            
        } = Object.fromEntries(new FormData(e.target));

        createPhoto({ categoryId, name, imageUrl, description })
            .then(() => {
                navigate(`/categories/${categoryId}`)
            })
    }

    return (
        <>
            <h1 className={styles["paragraph"]}>Upload your photo</h1>
            <form className={styles["login-form"]} onSubmit={submitCategory}>
                <label htmlFor="name">Photo name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" required />
                <label htmlFor="description">Photo description:</label>
                <input type="text" id="description" name="description" required />
                <button type="submit">Upload</button>
            </form>
        </>
    )
}