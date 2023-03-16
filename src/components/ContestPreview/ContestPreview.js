import styles from './ContestPreview.module.css'

export default function ContestPreview({
   contest
}) 

{
    return (
        <div className={styles["image-container"]}>
            <img src={contest.imageUrl} />
            <div className={styles["image-overlay"]}>
                <h3>{contest.contestName}</h3>
                <p>Participants count:</p>
                <p>Time left:</p>
                <p>Contest Prize: {contest.prize}</p>
                <button>Browse contest</button>
            </div>
        </div>
    )
}