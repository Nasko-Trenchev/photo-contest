import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import styles from './Details.module.css'

import Comment from "../Comment/Comment";

import { getImageDetails, getPhotoCreator } from '../../services/PhotoService';
import { getLikeCount, createLike, getAllLikes } from '../../services/LikeService';

export default function Details() {

  const [currentPhoto, setCurrentPhoto] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [photoCreator, setPhotoCreator] = useState({});
  const [likes, setLikes] = useState([]);
  const [vote, setVote] = useState(false);

  const { photoId } = useParams();
  const { user, isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getImageDetails(photoId)
      .then(result => {
        if(result.code) {
          console.log(result.message)
          return;
        }
        setCurrentPhoto(result);
      });
    getLikeCount(photoId)
      .then(result => {
        if (result.code) {
          console.log(result.message)
          return;
        }
        setLikeCount(result);
      });
  }, [photoId])

  useEffect(() => {
    getAllLikes()
      .then(result => {
        if(result.code) {
          console.log(result.message)
          return;
        }
        setLikes(result);
      })
  }, [])

  useEffect(() => {
    getPhotoCreator(photoId)
      .then(result => {
        setPhotoCreator(result);
      })
  }, [photoId])

  useEffect(() => {
    const hasLikes = likes.some(x => x._ownerId === user._id && x.photoId === photoId)
    setVote(hasLikes)
  }, [vote, likes, photoId, user._id])

  const increaseLike = () => {
    setLikeCount(oldValue => oldValue + 1)
    createLike({ photoId: currentPhoto._id, categoryId: currentPhoto.categoryId })
      .then(() => {
        setVote(true);
      })
    getAllLikes()
      .then(result => {
        setLikes(result)
      })
  }

  return (
    <main className={styles["details-page"]}>
      <div className={styles["photo-container"]}>
        <h1 className={styles["name"]}>
          {currentPhoto.name} by {photoCreator.user?.username} - {likeCount} {likeCount === 1 ? "like" : "likes"}
        </h1>
        <img src={currentPhoto.imageUrl} alt="Phosto" className={styles["photo"]} />
      </div>
      <div className={styles["details-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.contestName}</h1>
        {isAuthenticated &&
          <div className={styles["like-section"]}>
            {user._id !== currentPhoto._ownerId ?
              <>
                {vote ? <p className={styles["likePar"]}>{photoCreator.user?.username} appreciates your like! &#10084;</p> :
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png" alt="Phsoto"
                    onClick={() => increaseLike()} />}
              </>
              :
              <>
                <button className={styles["editButton"]} onClick={() => navigate(`/edit/${currentPhoto.categoryId}/${currentPhoto._id}`)}>Edit</button>
              </>}
          </div>}
        <Comment />
      </div>
    </main>
  )
}