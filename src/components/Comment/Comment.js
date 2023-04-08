import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { AlertContext } from '../../contexts/AlertContext'

import styles from './Comment.module.css'

import { getCommentsWithUsers, createComment, deleteComment } from '../../services/CommentService';

export default function Comment() {

  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState('');

  const { photoId } = useParams();
  const { user, isAuthenticated } = useContext(UserContext);
  const { setAlertState } = useContext(AlertContext)
  const navigate = useNavigate();

  useEffect(() => {
    getCommentsWithUsers(photoId)
      .then(result => {
        setComments(result);
      })
      .catch(err => {
        console.log(err)
      });
  }, [photoId])

  const submitComment = (e) => {
    e.preventDefault();

    if (currentComment === '') {
      setAlertState({ message: 'Comments should have content!', show: true })
      setCurrentComment('')
      return;
    }
    createComment({ photoId: photoId, user: user, comment: currentComment })
      .then(result => {
        setComments(oldstate => [...oldstate, result]);
        setCurrentComment('');
      })
      .catch(err => {
        console.log(err)
      });
  }

  const onDeleteComment = (id) => {
    deleteComment(id)
      .then(() => {
        setComments(oldState => oldState.filter(x => x._id !== id));
      })
      .catch(err => {
        console.log(err)
      });
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
                <i onClick={() => onDeleteComment(x._id)} className='far'>&#xf2ed;</i>
              </> : null}
          </li>))
          : <p>There are no comments for this picture. Be the first to post!</p>}
      </ul>
      {isAuthenticated ?
        <form className={styles["comment-form"]} onSubmit={submitComment}>
          <label htmlFor="comment" className={styles["comment-label"]}>Leave a Comment:</label>
          <textarea id="comment" name="comment" className={styles["comment-input"]}
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)}>
          </textarea>
          <button type="submit" className={styles["comment-button"]}>Post Comment</button>
        </form>
        : <NavLink className={styles["navlink"]} to="/login">Login to comment and like this picture</NavLink>
      }
    </div>
  )
}