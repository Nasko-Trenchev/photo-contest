import { useNavigate } from 'react-router-dom';

import styles from './Admin.module.css'

export default function Admin() {
  const navigate = useNavigate();

  const handleOption = (category) => {
    navigate(`/${category}`);
  }

  return (
    <main>
      <h1>Admin page</h1>
      <div>
        <button className={styles["adminButton"]} onClick={() => handleOption("createCategory")}>Create category</button>
      </div>
    </main>
  )
}

