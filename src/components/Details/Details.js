import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";

import styles from './Details.module.css'

import Comment from "../Comment/Comment";

import * as PhotoService from '../../services/PhotoService';
import * as LikeService from '../../services/LikeService';

export default function Details() {

  const [currentPhoto, setCurrentPhoto] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [photoCreator, setPhotoCreator] = useState({});

  const { photoId } = useParams();
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    PhotoService.getImageDetails(photoId)
      .then(result => {
        setCurrentPhoto(result);
      });
      LikeService.getLikeCount(photoId)
      .then(result => {
        if (result.code !== 404) {
          setLikeCount(result);
        }
      });
  }, [photoId])

  useEffect(() =>{
    PhotoService.getPhotoCreator(photoId)
    .then(result => {
      setPhotoCreator(result);
    })
  }, [photoId])


  const increaseLike = () => {
    setLikeCount(oldValue => oldValue + 1)
    LikeService.createLike({ photoId: currentPhoto._id, categoryId: currentPhoto.categoryId })
      .then(result => {
      })
  }

  return (
    <main className={styles["details-page"]}>
      <div className={styles["photo-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.name} uploaded by {photoCreator.user?.username} </h1>
        <img src={currentPhoto.imageUrl} alt="Phosto" className={styles["photo"]} />
      </div>
      <div className={styles["details-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.contestName}</h1>
        <div className={styles["like-section"]}>
          {user._id !== currentPhoto._ownerId ?
            <>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png" alt="Phsoto"
                onClick={() => increaseLike()} />
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="Pshoto"
                onClick={() => test(currentPhoto.categoryId)} /> */}
            </> : <>
              <button className={styles["editButton"]} onClick={() => navigate(`/edit/${currentPhoto.categoryId}/${currentPhoto._id}`)}>Edit</button>
            </>}
        </div>
        <Comment/>
      </div>
    </main>
  )
}