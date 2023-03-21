import styles from './ContestPhotos.module.css'
import { useNavigate } from 'react-router-dom';

export default function ContestPhotos({
    data
}){

    const navigate = useNavigate();

    const handleOption = (Id) => {
        navigate(`/photos/${Id}`);
      };
    

    return(
        <div className={styles["box"]}>
            <img src={data.imageUrl} alt="Rank 1" />
            <div className={styles["image-overlay"]}>
                <h3>{data.name}</h3>
                {/* <p>Uploaded by:</p> */}
                <p>Likes {data.likes}</p>
                <button onClick={()=>handleOption(data._id)}>See details</button>
            </div>
          </div>
    )
}