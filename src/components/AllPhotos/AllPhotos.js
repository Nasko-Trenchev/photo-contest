import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './AllPhotos.module.css'

import { getLikeCount } from '../../services/LikeService';


export default function AllPhotos({
    data
}) {

    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        getLikeCount(data._id)
            .then(result => {
                result.code ? console.log(result.message) : setLikeCount(result);
            })
    }, [data._id]);

    const navigate = useNavigate();

    const handleOption = (id) => {
        navigate(`/photos/${id}`);
    };

    return (
        <div className={styles["box"]}>
            <img src={data.imageUrl} alt="Category" />
            <div className={styles["image-overlay"]}>
                <h3>{data.name}</h3>
                <p>Current likes {likeCount}</p>
                <button onClick={() => handleOption(data._id)}>See details</button>
            </div>
        </div>
    )
}