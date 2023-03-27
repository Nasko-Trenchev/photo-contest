import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './MostLikedPhotos.module.css'

import { getLikeCount } from '../../services/LikeService';

export default function MostLikedPhotos({
    data
}) {

    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        getLikeCount(data._id)
            .then(result => {
                if (result.code !== 404) {
                    setLikeCount(result);
                }
            })
    })
    
    const navigate = useNavigate();

    const handleOption = (Id) => {
        navigate(`/photos/${Id}`);
    };

    return (
        <div className={styles["box"]}>
            <img src={data.imageUrl} alt="Top pictures" />
            <div className={styles["image-overlay"]}>
                <h3>{data.name}</h3>
                {likeCount && <p>Current likes {likeCount}</p>}
                <button onClick={() => handleOption(data._id)}>See details</button>
            </div>
        </div>
    )
}