import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import * as ContestService from '../../services/ContestService';

import styles from './Details.module.css'

export default function Details() {

  const [currentPhoto, setCurrentPhoto] = useState({})
  const [likeCount, setLikeCount] = useState(0)

  const { photoId } = useParams();

  useEffect(() => {
    ContestService.getImageDetails(photoId)
      .then(result => {
        setCurrentPhoto(result);
      })
  }, [photoId])

  useEffect(() =>{
    ContestService.getLikeCount(photoId)
    .then(result => {
      setLikeCount(result);
    })
  }, [photoId])

  const {user} = useContext(userContext)

  const increaseLike = () => {
    setLikeCount(oldValue => oldValue + 1)
    ContestService.createLike({photoId : currentPhoto._id})
    .then(result => {
      console.log(result)}
      )
  }

  return (
    <main className={styles["details-page"]}>
      <div className={styles["photo-container"]}>
      <h1 className={styles["name"]}>Name : uploaded by: {likeCount} </h1>
        <img src={currentPhoto.imageUrl} alt="Photo" className={styles["photo"]}/>
      </div>
      <div className={styles["details-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.contestName}</h1>
        <div className={styles["like-section"]}>
          {user._id !== currentPhoto._ownerId ?  
            <>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
                onClick={()=>increaseLike()} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                onClick={()=>increaseLike()} />
            </> : <p>Thank you for your vote!</p>}
          <span className={styles["like-count"]}>{likeCount}</span>
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
            <label htmlFor="comment" className={styles["comment-label"]}>Leave a Comment:</label>
            <textarea id="comment" name="comment" className={styles["comment-input"]} required></textarea>
            <button type="submit" className={styles["comment-button"]}>Post Comment</button>
          </form>
        </div>
      </div>
    </main>
  )
}