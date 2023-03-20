import styles from './CreateCategoryForm.module.css'

import * as contestService from '../../../services/ContestService';


export default function CreateCategoryForm() {

const createContest = (e) => {
    e.preventDefault();

    const {
      imageUrl,
      name,
    } = Object.fromEntries(new FormData(e.target));

    contestService.createCategory({imageUrl, name})
    .then(data=> {
      console.log(data);
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
          <button type="submit">Log in</button>
        </form>
        </>
    )
}