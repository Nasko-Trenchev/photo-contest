import { useParams, useNavigate } from 'react-router-dom'
import styles from './Gallery.module.css'
import * as ContestService from '../../services/ContestService'

import { useState, useEffect } from 'react'
import ContestPhotos from '../ContestPhotos/ContestPhotos'

export default function Gallery() {

    const [topPhotos, setTopPhotos] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
      ContestService.testLikes(categoryId)
      .then(result => {
        setTopPhotos(Object.values(result))
      })
  }, [categoryId])

  const navigate = useNavigate();

  const handleOption = (Id) => {
    navigate(`/categories/${Id}/photos`);
  };

  return (
    <main className={styles['gallery']} >
      <button onClick={()=> handleOption(categoryId)}>Create photo</button>
      <h1>Contest name</h1>
      <div>
        <input name="searcform" id="serachform" placeholder='Search photo by name'></input>
      </div>
      <h2>The three most liked photos:</h2>
      <section>

        {topPhotos.map(x => <ContestPhotos key={x._id} data={x}/>)}
        {/* <div className={styles["box"]}>
            <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Rank 1" />
            <div className={styles["image-overlay"]}>
                <h3>Name</h3>
                <p>Uploaded by:</p>
                <p>Current like count</p>
                <button>See details</button>
            </div>
          </div> */}
        {/* TODO: Render the second and third pictures */}
        {/* <div className={styles["box"]}>
            <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Rank 2" />
            <div className={styles["image-overlay"]}>
            <h3>Name</h3>
                <p>Uploaded by:</p>
                <p>Current like count</p>
                <button>See details</button>
            </div>
          </div>
          <div className={styles["box"]}>
            <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Rank 3" />
            <div className={styles["image-overlay"]}>
            <h3>Name</h3>
                <p>Uploaded by:</p>
                <p>Current like count</p>
                <button>See details</button>
            </div>
          </div> */}
      </section>
      <button>More details</button>

      <section id="#more">

      </section>
    </main>
  )
}