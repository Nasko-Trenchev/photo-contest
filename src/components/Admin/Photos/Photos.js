import styles from './Photos.module.css'

import { useParams } from 'react-router-dom';

import * as contestService from '../../../services/ContestService';


export default function Photos() {

    const {categoryId} = useParams();
    const submitCategory = (e) => {
        e.preventDefault();

        const {
            contestName,
            imageUrl,
            participants,
            prize
        } = Object.fromEntries(new FormData(e.target));

        contestService.createPhoto({categoryId, imageUrl, contestName, participants, prize, likes: 0})
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
            <h1 className={styles["paragraph"]}>Join contest</h1>
            <form className={styles["login-form"]} onSubmit={submitCategory}>
                <label htmlFor="name">Photo name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" required />
                <label htmlFor="description">Photo description:</label>
                <input type="text" id="description" name="description" required />
                <button type="submit">Create</button>
            </form>
        </>
    )
}