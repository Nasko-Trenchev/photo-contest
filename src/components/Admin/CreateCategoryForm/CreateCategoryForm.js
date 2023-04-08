import { useNavigate } from 'react-router-dom';

import styles from './CreateCategoryForm.module.css'

import Input from '../../Input/Input';

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
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <>
      <h1 className={styles["paragraph"]}>Create Category</h1>
      <form className={styles["login-form"]} onSubmit={createContest}>
        <Input type="text" id="imageUrl" label="ImageUrl:" />
        <Input type="text" id="name" label="Category name:" />
        <button type="submit">Create</button>
      </form>
    </>
  )
}