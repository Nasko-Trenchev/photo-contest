import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertContext } from '../../contexts/AlertContext'

import Input from '../Input/Input';

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

    if (formInput.name.length < 3) {
      setAlertState({ message: 'Name should be at least 3 characters long!', show: true })
      return;
    }

    const validPhoto = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi.test(formInput.imageUrl);

    if (!validPhoto) {
      setAlertState({ message: 'Invalid photo URL!', show: true })
      return;
    }

    if (formInput.description.length < 5) {
      setAlertState({ message: 'Description should be at least 5 characters long!', show: true })
      return;
    }

    createPhoto({ categoryId, ...formInput })
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
      .catch((err) => {
        setAlertState({ message: err, show: true })
        console.log(err)
      })
  }

  return (
    <>
      <h1 className={styles["paragraph"]}>Upload your photo</h1>
      <form className={styles["login-form"]} onSubmit={onFormSubmit}>
        <Input type="text" id="name" label="Photo name:" onChange={onUserInput} value={formInput.name} />
        <Input type="text" id="imageUrl" label="Image URL:" onChange={onUserInput} value={formInput.imageUrl} />
        <Input type="text" id="description" label="Photo description:" onChange={onUserInput} value={formInput.description} />
        <button type="submit">Upload</button>
      </form>
    </>
  )
}