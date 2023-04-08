import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { UserContext } from '../../../contexts/UserContext';
import { AlertContext } from '../../../contexts/AlertContext'

import Input from '../../Input/Input';

import styles from './EditComment.module.css';

import { editComment, getComment } from '../../../services/CommentService';

export default function EditComment() {

    const [formInput, setFormInput] = useState('');

    const { commentId, photoId } = useParams();
    const { user } = useContext(UserContext);
    const { setAlertState } = useContext(AlertContext)

    useEffect(() => {
        getComment(commentId)
            .then(result => {
                setFormInput(result.comment);
            })
            .catch(err => {
                console.log(err)
            });
    }, [commentId])

    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (formInput === '') {
            setAlertState({ message: 'Comments should have content!', show: true })
            setFormInput('')
            return;
        }
        editComment(commentId, { photoId: photoId, user: user, comment: formInput })
            .then(() => {
                navigate(`/photos/${photoId}`)
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <>
            <h1 className={styles["paragraph"]}>Edit your comment</h1>
            <form className={styles["login-form"]} onSubmit={onFormSubmit} >
                <Input type="text" id="comment" label="Type your new comment"
                    onChange={(e) => setFormInput(e.target.value)} value={formInput} />
                <button type="submit">Edit comment</button>
            </form>
        </>
    )
}