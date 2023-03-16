import { useState, useEffect } from 'react'
import styles from './ContestNature.module.css'

import * as ContestService from '../../services/ContestService'
import ContestPreview from '../ContestPreview/ContestPreview';


export default function ContestNature() {
    const [currentContest, setCurrentContest] = useState([]);

    useEffect(() => {
        ContestService.getNautreContests()
        .then(result => {
            setCurrentContest(Object.values(result))
        })
    }, [])

    console.log(currentContest)

    return (
        <main>
            <h1>Select contest to participate in:</h1>
            <div className={styles["container"]}>
                {/* TODO: Render the nature contests from the server */}
                {currentContest.map(x => <ContestPreview key={x._id} contest={x}/>)}
                {/* <div className={styles["image-container"]}>
                    <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className={styles["image-overlay"]}>
                        <h3>Contest name</h3>
                        <p>Participants count</p>
                        <p>Time left:</p>
                        <p>Prize</p>
                        <button>Browse contest</button>
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
                </div> */}
            </div>
            <h1>There aren`t any contests for this category</h1>
        </main>
    )
}