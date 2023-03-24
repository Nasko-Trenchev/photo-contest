import { useParams, useNavigate } from 'react-router-dom';
import styles from './Gallery.module.css';
import * as ContestService from '../../services/ContestService';
import * as PhotoService from '../../services/PhotoService';

import { useState, useEffect } from 'react';
import MostLikedPhotos from '../MostLikedPhotos/MostLikedPhotos';
import AllPhotos from '../AllPhotos/AllPhotos';

export default function Gallery() {

  const [topPhotos, setTopPhotos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [category, setCategory] = useState({});
  const [showPhotos, setShowPhotos] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {

    ContestService.getTopPhotos(categoryId)
      .then(result => {
        setTopPhotos(Object.values(result))
      });

    ContestService.getCategory(categoryId)
    .then(result => {
      setCategory(result);
    })
  }, [categoryId])

  useEffect(() => {
    PhotoService.getCurrentContestImages(categoryId)
      .then(result => {
        setAllPhotos(result);
      })
  }, [categoryId])
  const navigate = useNavigate();

  const handleOption = (Id) => {
    navigate(`/categories/${Id}/createPhoto`);
  };

  console.log(topPhotos);

  return (
    <main className={styles['gallery']} >
      <button className={styles['createButton']} onClick={() => handleOption(categoryId)}>Join {category.name} contest</button>
      
      <h2>The three most liked photos:</h2>
      <section>
        {topPhotos?.map(x => <MostLikedPhotos key={x._id} data={x} />)}
      </section>
      <button className={styles['MoreButton']} onClick={() => setShowPhotos(!showPhotos)}>{showPhotos ? "Hide photos" : "Load all photos"}</button>

      <section>
        {showPhotos && (allPhotos?.map(x => Object.values(topPhotos).some(y => y._id === x._id)
          ? null : <AllPhotos key={x._id} data={x} />))}
      </section>
    </main>
  )
}