import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './AllPhotos.module.css'

import * as LikeService from '../../services/LikeService';


export default function AllPhotos({
    data
}) {

    const [likeCount, setLikeCount] = useState(0);

    useEffect(() =>{
        LikeService.getLikeCount(data._id)
        .then(result => {
            if(result.code !== 404){
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
            <img src={data.imageUrl} alt="Rank 1" />
            <div className={styles["image-overlay"]}>
                <h3>{data.name}</h3>
                {/* <p>Uploaded by:</p> */}
                <p>Current likes {likeCount}</p>
                <button onClick={() => handleOption(data._id)}>See details</button>
            </div>
        </div>
    )
}