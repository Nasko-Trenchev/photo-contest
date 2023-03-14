import styles from './ContestNature.module.css'


export default function ContestNature() {

    return (
        <main>
            <h1>Select contest to participate in:</h1>
        <div className={styles["container"]}>
            <div className={styles["image-container"]}>
            <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className={styles["image-overlay"]}>
                    <h3>Image 1</h3>
                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>
                    <p>Paragraph 3</p>
                    <button>Button</button>
                </div>
            </div>
            <div className={styles["image-container"]}>
            <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className={styles["image-overlay"]}>
                    <h3>Image 2</h3>
                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>
                    <p>Paragraph 3</p>
                    <button>Button</button>
                </div>
            </div>
        </div>
        </main>

    )
}