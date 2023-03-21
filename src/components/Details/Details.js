import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as ContestService from '../../services/ContestService';

import styles from './Details.module.css'

export default function Details() {

  const [currentPhoto, setCurrentPhoto] = useState({})
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0)

  const { photoId } = useParams();

  useEffect(() => {
    ContestService.getImageDetails(photoId)
      .then(result => {
        setCurrentPhoto(result);
      })
  }, [photoId])

  const increaseLike = () => {
    setLikeCount(oldValue => oldValue + 1)
  }

  return (
    <main className={styles["details-page"]}>
      <div className={styles["photo-container"]}>
      <h1 className={styles["name"]}>Name : uploaded by:  </h1>
        <img src={currentPhoto.imageUrl} alt="Photo" className={styles["photo"]}/>
      </div>
      <div className={styles["details-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.contestName}</h1>
        <div className={styles["like-section"]}>
          {!like ?  
            <>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
                onClick={() => setLike(true)} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                onClick={increaseLike} />
            </> : <p>Thank you for your vote!</p>}
          {!like && <span className={styles["like-count"]}>{likeCount}</span>}
        </div>
        <div className={styles["comment-section"]}>
          <h2 className={styles["comment-heading"]}>Comments</h2>
          <ul className={styles["comment-list"]}>
            <li className={styles["comment"]}>
              <span className={styles["comment-author"]}>John Doe:</span> This is a great product!
            </li>
            <li className={styles["comment"]}>
            <span className={styles["comment-author"]}>Jane Smith:</span> I love this product!
            </li>
          </ul>   
          <form className={styles["comment-form"]}>
            <label for="comment" className={styles["comment-label"]}>Leave a Comment:</label>
            <textarea id="comment" name="comment" className={styles["comment-input"]} required></textarea>
            <button type="submit" className={styles["comment-button"]}>Post Comment</button>
          </form>
        </div>
      </div>
    </main>
  )
}