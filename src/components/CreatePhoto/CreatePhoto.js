import styles from './CreatePhoto.module.css'

import { useParams } from 'react-router-dom';

import * as photoService from '../../services/PhotoService';


export default function CreatePhotos() {

    const {categoryId} = useParams();
    const submitCategory = (e) => {
        e.preventDefault();

        const {
            name,
            imageUrl,
            description,
            price
        } = Object.fromEntries(new FormData(e.target));

        photoService.createPhoto({categoryId, name, imageUrl, description, price})
            .then(data => {
                console.log(data);
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
                <label htmlFor="price">Photo price:</label>
                <input type="text" id="price" name="price" required />
                <button type="submit">Upload</button>
            </form>
        </>
    )
}