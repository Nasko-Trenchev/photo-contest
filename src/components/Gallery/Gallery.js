import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Gallery.module.css';

import MostLikedPhotos from '../MostLikedPhotos/MostLikedPhotos';
import AllPhotos from '../AllPhotos/AllPhotos';

import { getCategory } from '../../services/CategoryService';
import { getCurrentContestImages } from '../../services/PhotoService';
import { getTopLikedPhotos } from '../../services/LikeService';

export default function Gallery() {

  const [topPhotos, setTopPhotos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [category, setCategory] = useState({});
  const [showPhotos, setShowPhotos] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getTopLikedPhotos(categoryId)
      .then(result => {
        if (result.code) {
          console.log(result.message)
          return;
        }
        setTopPhotos(Object.values(result))
      })
    getCategory(categoryId)
      .then(result => {
        if (result.code) {
          console.log(result.message)
          return;
        }
        setCategory(result);
      })
  }, [categoryId])

  useEffect(() => {
    getCurrentContestImages(categoryId)
      .then(result => {
        if (result.code) {
          console.log(result.message)
          return;
        }
        setAllPhotos(result);
      })
  }, [categoryId])

  const navigate = useNavigate();

  const handleOption = (id) => {
    navigate(`/categories/${id}/createPhoto`);
  };

  return (
    <main className={styles['gallery']} >
      <button className={styles['createButton']} onClick={() => handleOption(categoryId)}>Join {category.name} category</button>
      {topPhotos.length > 0 &&
        <>
          <h2>The most liked photos:</h2>
          <section>
            {topPhotos?.map(x => <MostLikedPhotos key={x._id} data={x} />)}
          </section>
          {allPhotos.length > topPhotos.length &&
            <div>
              <button className={styles['MoreButton']} onClick={() => setShowPhotos(!showPhotos)}>
                {showPhotos ?  "Hide photos" : "Load all photos"}
              </button>
            </div>
          }
        </>
      }
      <section>
        {showPhotos && (allPhotos?.map(x => Object.values(topPhotos).some(y => y._id === x._id)
          ? null : <AllPhotos key={x._id} data={x} />))}
        {allPhotos.length === 0 && <h2>Currently there are no pictures for this category</h2>}
      </section>
    </main>
  )
}