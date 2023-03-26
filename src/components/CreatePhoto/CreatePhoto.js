import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertContext } from '../../contexts/AlertContext'

import styles from './CreatePhoto.module.css'

import { createPhoto } from '../../services/PhotoService';


export default function CreatePhotos() {

    const [formInput, setformInput] = useState({
        name: '',
        imageUrl: '',
        description: ''
    })

    const { setAlertState } = useContext(AlertContext)
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const onUserInput = (e) => {
        setformInput(oldData => ({
            ...oldData,
            [e.target.name]: e.target.value
        }))
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const validPhoto = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi.test(formInput.imageUrl);

        if(!validPhoto){
            setAlertState({ message: 'Invalid photo URL', show: true })
            setformInput({
                name: '',
                imageUrl: '',
                description: ''
            })
            return;
          }
        createPhoto({categoryId, ...formInput })
          .then(authData => {
            if (authData.code) {
              setAlertState({ message: authData.message, show: true })
              setformInput({
                name: '',
                imageUrl: '',
                description: ''
              })
              return;
            }
            navigate(`/categories/${categoryId}`)
          })
          .catch((e) => {
            setAlertState({ message: e.message, show: true })
          })
      }

    return (
        <>
            <h1 className={styles["paragraph"]}>Upload your photo</h1>
            <form className={styles["login-form"]} onSubmit={onFormSubmit}>
                <label htmlFor="name">Photo name:</label>
                <input type="text" id="name" name="name" value={formInput.name} onChange={onUserInput} />
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={formInput.imageUrl} onChange={onUserInput} />
                <label htmlFor="description">Photo description:</label>
                <input type="text" id="description" name="description" value={formInput.description} onChange={onUserInput} />
                <button type="submit">Upload</button>
            </form>
        </>
    )
}