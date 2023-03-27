import { useNavigate } from 'react-router-dom';

import styles from './CreateCategoryForm.module.css'

import { createCategory } from '../../../services/CategoryService';


export default function CreateCategoryForm() {

  const navigate = useNavigate();

  const createContest = (e) => {
    e.preventDefault();

    const {
      imageUrl,
      name,
    } = Object.fromEntries(new FormData(e.target));

    createCategory({ imageUrl, name })
      .then(() => {
        navigate('/');
      })
  }

  return (
    <>
      <h1 className={styles["paragraph"]}>Create Category</h1>
      <form className={styles["login-form"]} onSubmit={createContest}>
        <label htmlFor="imageUrl">ImageUrl:</label>
        <input type="text" id="imageUrl" name="imageUrl" required />
        <label htmlFor="name">Category name:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Create</button>
      </form>
    </>
  )
}