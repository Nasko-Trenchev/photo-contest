import styles from './ContestPhotos.module.css'


export default function ContestPhotos({
    data
}){

    return(
        <div className={styles["box"]}>
            <img src={data.photos.imageUrl} alt="Rank 1" />
            <div className={styles["image-overlay"]}>
                <h3>{data.name}</h3>
                {/* <p>Uploaded by:</p> */}
                <p>Likes {data.likes}</p>
                <button>See details</button>
            </div>
          </div>
    )
}