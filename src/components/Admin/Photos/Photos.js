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

        contestService.createPhoto({categoryId, imageUrl, contestName, participants, prize})
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
            <h1 className={styles["paragraph"]}>Create Photos</h1>
            <form className={styles["login-form"]} onSubmit={submitCategory}>
                <label htmlFor="contestName">Photo name:</label>
                <input type="text" id="contestName" name="contestName" required />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" required />
                <label htmlFor="participants">Participants count:</label>
                <input type="text" id="participants" name="participants" required />
                <label htmlFor="prize">Contest prize</label>
                <input type="text" id="prize" name="prize" required />
                <button type="submit">Create</button>
            </form>
        </>
    )
}