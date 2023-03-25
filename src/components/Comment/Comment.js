import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import styles from './Comment.module.css'

import EditComment from "./EditComment/EditComment";

import * as CommentService from '../../services/CommentService';


export default function Comment() {

  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState('');
  const [showEdit, setShowEdit] = useState(false);

  const { photoId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    CommentService.getComments(photoId)
      .then(result => {
        setComments(result);
      })
  }, [photoId])

  const createComment = (e) => {
    e.preventDefault();
    CommentService.createComment({ photoId: photoId, user: user, comment: currentComment })
      .then(result => {
        setComments(oldstate => [...oldstate, result]);
        setCurrentComment('');
      })
  }

  const deleteComment = (id) => {
    CommentService.deleteComment(id)
      .then(() => {
        setComments(oldState => oldState.filter(x => x._id !== id));
        setShowEdit(false);
      })
  }

  const editComment = (id) => {
    console.log(id);
  }
  return (

    <div className={styles["comment-section"]}>
      <h2 className={styles["comment-heading"]}>Comments</h2>
      <ul className={styles["comment-list"]}>
        {comments.length > 0 ? (comments.map(x =>
          <li key={x._id} className={styles["comment"]}>
            <span className={styles["comment-author"]}>{x.user.username}:</span> {x.comment}
            {user._id === x._ownerId ?
              <>
                <i onClick={() => navigate(`/comments/${photoId}/${x._id}/edit`)} className='fas'>&#xf591;</i>
                <i onClick={() => deleteComment(x._id)} className='far'>&#xf2ed;</i>
              </> : null}
          </li>)) : <p>There are no comments for this picture. Be the first to post!</p>}
        {showEdit &&
         <EditComment onEditSubmit={editComment}/>
        }

        {/* <li className={styles["comment"]}>
            <span className={styles["comment-author"]}>John Doe:</span> This is a great product!
          </li>
          <li className={styles["comment"]}>
            <span className={styles["comment-author"]}>Jane Smith:</span> I love this product!
          </li> */}
      </ul>
      {!showEdit &&
        <form className={styles["comment-form"]} onSubmit={createComment}>
          <label htmlFor="comment" className={styles["comment-label"]}>Leave a Comment:</label>
          <textarea id="comment" name="comment" className={styles["comment-input"]}
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)} required>
          </textarea>
          <button type="submit" className={styles["comment-button"]}>Post Comment</button>
        </form>
      }
    </div>
  )
}