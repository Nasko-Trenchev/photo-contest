import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import AllPhotos from "../AllPhotos/AllPhotos";

import { getAllPhotos } from '../../services/PhotoService';
import { getAllLikes } from '../../services/LikeService';
import { getAllComments } from '../../services/CommentService';

import styles from './Profile.module.css'

export default function Profile() {

    const [photosUploaded, setPhotosUploaded] = useState([]);
    const [totalLikesGiven, setTotalLikesGiven] = useState([]);
    const [totalCommentsGiven, setTotalCommentsGiven] = useState([]);

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPhotos()
            .then(result => {
                setPhotosUploaded(result.filter(x => x._ownerId === user._id));
            })
            .catch(err => {
                console.log(err)
            });

        getAllLikes()
            .then(result => {
                setTotalLikesGiven(result.filter(x => x._ownerId === user._id));
            })
            .catch(err => {
                console.log(err)
            });

        getAllComments()
            .then(result => {
                setTotalCommentsGiven(result.filter(x => x._ownerId === user._id))
            })
            .catch(err => {
                console.log(err)
            });
    }, [user]);

    return (
        <>
            <main className={styles['gallery']}>
                <section>
                    <div className={styles["profile"]} >
                        <h1>Profile page</h1>
                        <ul>
                            <li><strong>Email: {user.email}</strong></li>
                            <li><strong>Username: {user.username}</strong><i></i></li>
                            <li><strong>Total uploaded pictures: {photosUploaded.length}</strong></li>
                            <li><strong>Total likes given: {totalLikesGiven.length}</strong></li>
                            <li><strong>Total comments: {totalCommentsGiven.length}</strong></li>
                        </ul>
                    </div>
                </section>
                {photosUploaded.length > 0 ?
                    <>
                        <h2>Your pictures</h2>
                        <section>
                            {photosUploaded?.map(x => <AllPhotos key={x._id} data={x} />)}
                        </section>
                    </>
                    :
                    <>
                        <h2>You don`t have any uploaded pictures</h2>
                        <br></br>
                        <button className={styles["browseButton"]} onClick={() => navigate(`/`)}>Browse categories</button>
                    </>
                }
            </main>
        </>)
}
