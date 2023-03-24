import { useParams, useNavigate } from 'react-router-dom';
import styles from './Gallery.module.css';
import * as ContestService from '../../services/ContestService';

import { useState, useEffect } from 'react';
import MostLikedPhotos from '../MostLikedPhotos/MostLikedPhotos';
import AllPhotos from '../AllPhotos/AllPhotos';

export default function Gallery() {

    const [topPhotos, setTopPhotos] = useState([]);
    const [allPhotos, setAllPhotos] = useState([]);
    const [showPhotos, setShowPhotos] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
      ContestService.getTopPhotos(categoryId)
      .then(result => {
        setTopPhotos(Object.values(result))
      })
  }, [categoryId])

  useEffect(() => {
    ContestService.getCurrentContestImages(categoryId)
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
      <button onClick={()=> handleOption(categoryId)}>Create photo</button>
      <h1>Contest name</h1>
      <div>
        <input name="searcform" id="serachform" placeholder='Search photo by name'></input>
      </div>
      <h2>The three most liked photos:</h2>
      <section>
        {topPhotos?.map(x => <MostLikedPhotos key={x._id} data={x}/>)}
      </section>
      <button onClick={()=>setShowPhotos(!showPhotos)}>{showPhotos ? "Hide photos": "Load all photos"}</button>

      <section>
        {showPhotos && (allPhotos?.map(x => Object.values(topPhotos).some(y=> y._id === x._id) 
        ? null : <AllPhotos key={x._id} data={x}/>))}
      </section>
    </main>
  )
}