import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import { getAllPhotos } from '../../services/PhotoService';
import { getAllLikes } from '../../services/LikeService';
import { getAllComments } from '../../services/CommentService';

import styles from './Profile.module.css'

export default function Profile() {

    const [photosUploaded, setPhotosUploaded] = useState([]);
    const [totalLikesGiven, setTotalLikesGiven] = useState([]);
    const [totalCommentsGiven, setTotalCommentsGiven] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        getAllPhotos()
            .then(result => {
                if (result.code) {
                    console.log(result.message)
                    return;
                }
                setPhotosUploaded(result.filter(x => x._ownerId === user._id))
            });

        getAllLikes()
            .then(result => {
                if (result.code) {
                    console.log(result.message)
                    return;
                }
                setTotalLikesGiven(result.filter(x => x._ownerId === user._id))
            });

        getAllComments()
            .then(result => {
                if (result.code) {
                    console.log(result.message)
                    return;
                }
                setTotalCommentsGiven(result.filter(x => x._ownerId === user._id))
            });
    }, [user]);

    return (
        <>
            <section>
                <div className={styles["profile"]} >
                    <h1>Profile page</h1>
                    <ul>
                        <li><strong>Email: <i>{user.email}</i></strong></li>
                        <li><strong>Username: <i>{user.username}</i></strong><i></i></li>
                        <li><strong>Total uploaded pictures: <i>{photosUploaded.length}</i></strong></li>
                        <li><strong>Total likes given: <i>{totalLikesGiven.length}</i></strong></li>
                        <li><strong>Total comments: <i>{totalCommentsGiven.length}</i></strong></li>
                    </ul>
                </div>
            </section>
        </>)
}
