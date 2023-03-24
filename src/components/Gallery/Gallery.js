import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Gallery.module.css';

import MostLikedPhotos from '../MostLikedPhotos/MostLikedPhotos';
import AllPhotos from '../AllPhotos/AllPhotos';

import * as CategoryService from '../../services/CategoryService';
import * as PhotoService from '../../services/PhotoService';
import * as LikeService from '../../services/LikeService';

export default function Gallery() {

  const [topPhotos, setTopPhotos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [category, setCategory] = useState({});
  const [showPhotos, setShowPhotos] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {

    LikeService.getTopLikedPhotos(categoryId)
      .then(result => {
        setTopPhotos(Object.values(result))
      });

      CategoryService.getCategory(categoryId)
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