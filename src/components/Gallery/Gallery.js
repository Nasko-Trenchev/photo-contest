import styles from './Gallery.module.css'

export default function Gallery(){

    return (
       <main className={styles['gallery']} >
        <h1>Contest name</h1>

        <div>
          <input name="searcform" id="serachform" placeholder='Search photo by name'></input>
        </div>

        <h2>The three most liked photos:</h2>

        <section>
          <div className={styles["box"]}>
            <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Rank 1" />
            <div className={styles["image-overlay"]}>
                <h3>Photo Name</h3>
                <p>Participants count:</p>
                <p>Time left:</p>
                <p>Contest Prize:</p>
                <button>See details</button>
            </div>
          </div>
          {/* TODO: Render the second and third pictures */}
          <div className={styles["box"]}>
            <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Rank 2" />
            <div className={styles["image-overlay"]}>
                <h3>Photo Name</h3>
                <p>Participants count:</p>
                <p>Time left:</p>
                <p>Contest Prize:</p>
                <button>See details</button>
            </div>
          </div>
          <div className={styles["box"]}>
            <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Rank 3" />
            <div className={styles["image-overlay"]}>
                <h3>Photo Name</h3>
                <p>Participants count:</p>
                <p>Time left:</p>
                <p>Contest Prize:</p>
                <button>See details</button>
            </div>
          </div>
        </section>
        <section id="#more">

        </section>
       </main>
    )
}