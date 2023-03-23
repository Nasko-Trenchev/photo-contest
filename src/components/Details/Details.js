import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import * as ContestService from '../../services/ContestService';
import * as CommentService from '../../services/CommentService';

import styles from './Details.module.css'

export default function Details() {

  const [currentPhoto, setCurrentPhoto] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState('');

  const { photoId } = useParams();
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    ContestService.getImageDetails(photoId)
      .then(result => {
        setCurrentPhoto(result);
      });
    ContestService.getLikeCount(photoId)
      .then(result => {
        if(result.code !== 404) {
          setLikeCount(result);
        }
      });
  }, [photoId])

  useEffect(() => {
    CommentService.getComments(photoId)
      .then(result => {
        setComments(result);
      })
  }, [photoId])


  const increaseLike = () => {
    setLikeCount(oldValue => oldValue + 1)
    ContestService.createLike({ photoId: currentPhoto._id, categoryId: currentPhoto.categoryId })
      .then(result => {
        console.log(result)
      })
  }

  const createComment = (e) => {
    e.preventDefault();
    CommentService.createComment({ photoId: photoId, user: user, comment: currentComment })
      .then(result => {
        setComments(oldstate => [...oldstate, result]);
        setCurrentComment('');
      })
      
  }

  return (
    <main className={styles["details-page"]}>
      <div className={styles["photo-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.name}: uploaded by: {likeCount} </h1>
        <img src={currentPhoto.imageUrl} alt="Phosto" className={styles["photo"]} />
      </div>
      <div className={styles["details-container"]}>
        <h1 className={styles["name"]}>{currentPhoto.contestName}</h1>
        <div className={styles["like-section"]}>
          {user._id !== currentPhoto._ownerId ?
            <>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png" alt="Phsoto"
                onClick={() => increaseLike()} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="Pshoto"
                onClick={() => test(currentPhoto.categoryId)} />
            </> : <>
              <button onClick={()=> navigate(`/edit/${currentPhoto.categoryId}/${currentPhoto._id}`)}>Edit</button>
              <button>Delete</button>
            </>}
        </div>
        <div className={styles["comment-section"]}>
          <h2 className={styles["comment-heading"]}>Comments</h2>
          <ul className={styles["comment-list"]}>
            {comments.length > 0 ? (comments.map(x =>
              <li key={x._id} className={styles["comment"]}>
                <span className={styles["comment-author"]}>{x.user.username}:</span> {x.comment}
              </li>)) : <p>There are no comments for this picture. Be the first to post!</p>}
            {/* <li className={styles["comment"]}>
              <span className={styles["comment-author"]}>John Doe:</span> This is a great product!
            </li>
            <li className={styles["comment"]}>
              <span className={styles["comment-author"]}>Jane Smith:</span> I love this product!
            </li> */}
          </ul>
          <form className={styles["comment-form"]} onSubmit={createComment}>
            <label htmlFor="comment" className={styles["comment-label"]}>Leave a Comment:</label>
            <textarea id="comment" name="comment" className={styles["comment-input"]}
              value={currentComment}
              onChange={(e) => setCurrentComment(e.target.value)} required>
             </textarea>
            <button type="submit" className={styles["comment-button"]}>Post Comment</button>
          </form>
        </div>
      </div>
    </main>
  )
}