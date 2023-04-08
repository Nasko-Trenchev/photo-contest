import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../../../contexts/UserContext';
import { AlertContext } from '../../../contexts/AlertContext'

import Input from '../../Input/Input';

import styles from './EditComment.module.css';

import { editComment } from '../../../services/CommentService';

export default function EditComment() {

    // const [currentComment, setCurrentComment] = useState({});

    const { commentId, photoId } = useParams();
    const { user } = useContext(UserContext);
    const { setAlertState } = useContext(AlertContext)

    // useEffect(() => {   
    //     getComment(commentId)
    //         .then(result => {
    //             console.log(result);
    //             setCurrentComment(result);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });

    // }, [commentId])

    const navigate = useNavigate();

    const onEditSubmit = (e) => {
        e.preventDefault();
        const {
            comment,
        } = Object.fromEntries(new FormData(e.target));

        if (comment === '') {
            setAlertState({ message: 'Comment should have content!', show: true })
            return;
        }
        editComment(commentId, { photoId: photoId, user: user, comment: comment })
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
            <form className={styles["login-form"]} onSubmit={onEditSubmit} >
                <Input type="text" id="comment" label="Type your new comment" />
                {/* <label htmlFor="comment">Type your new comment</label>
                <input type="text" id="comment" name="comment" /> */}
                <button type="submit">Edit comment</button>
            </form>
        </>
    )
}