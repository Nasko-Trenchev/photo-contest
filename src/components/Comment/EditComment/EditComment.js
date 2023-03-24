import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { userContext } from '../../../contexts/userContext';

import styles from './EditComment.module.css';

import * as CommentService from '../../../services/CommentService';

export default function EditComment(){

    const {commentId, photoId} = useParams();
    const { user } = useContext(userContext);
    const navigate = useNavigate();

    const onEditSubmit = (e) => {
        e.preventDefault();
        const {
            comment,
          } = Object.fromEntries(new FormData(e.target));
      
        CommentService.editComment(commentId, {photoId: photoId, user: user, comment: comment})
        .then(result => {
           navigate(`/photos/${photoId}`)
        })
    }
    return (
        <>
        <h1 className={styles["paragraph"]}>Edit your comment</h1>
        <form className={styles["login-form"]} onSubmit={onEditSubmit} >
            <label htmlFor="comment">Type your new comment</label>
            <input type="text" id="comment" name="comment" />
            <button type="submit">Edit comment</button>
        </form>
    </>
    )
}