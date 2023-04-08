import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import styles from './Admin.module.css'

export default function Admin() {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleOption = (category) => {
    navigate(`/${category}`);
  }

  return (
    <main>
      {user.email === "admin@abv.bg" ?
        <>
          <h1>Admin page</h1>
          <div>
            <button className={styles["adminButton"]} onClick={() => handleOption("createCategory")}>Create category</button>
          </div>
        </>
        : <h1>You don`t have admin permissions</h1>}
    </main>
  )
}

