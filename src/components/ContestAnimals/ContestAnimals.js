import styles from './ContestAnimals.module.css'


export default function ContestAnimals() {

  return (
    <main className={styles["topcontent"]}>
      <h1>Current contests</h1>
      <div className={styles["float-container"]} >
        <div className={styles["float-child"]}>
        <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>

        <div className={styles["float-child"]}>
          <h1>Contest name: </h1>
          <h2>Contest participants</h2>
          <h2>Time left:</h2>
          <button>Join contest</button>
        </div>
      </div>

      <div className={styles["float-container"]} >
        <div className={styles["float-child"]}>
        <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>

        <div className={styles["float-child"]}>
          <h1>Contest name: </h1>
          <h2>Contest participants</h2>
          <h2>Time left:</h2>
          <button>Join contest</button>
        </div>
      </div>
 
 
      {/* <div className={styles["fullwrap"]}>
        <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className={styles["fullcap"]}>
          Animals<br /><br /><br />
          <button>View current contests</button>
        </div>
      </div>
      <div className={styles["fullwrap"]}>
        <img src="https://images.pexels.com/photos/2706654/pexels-photo-2706654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className={styles["fullcap"]}>
          Space <br /><br /><br />
          <button>View current contests</button>
        </div>
      </div> */}
    </main>
  )
}