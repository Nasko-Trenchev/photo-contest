import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './Main.module.css'

import * as CategoryService from '../../services/CategoryService'


export default function Main() {

    const [currenCategories, setCurrentCategories] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategories()
        .then(result => {
            if(result.code !== 404){
                setCurrentCategories(result);
            }
        })
    }, [])
  
    const navigate = useNavigate();
  
    const handleOption = (Id) => {
      navigate(`/categories/${Id}`);
    };
  
    return (
        <main className={styles['gallery']}>
            <h1>Welcome to the photo contest!</h1>
            
            {currenCategories.length !==0 &&  <h2>Select category to participate in:</h2>}
           
            <section>
            {currenCategories.length !== 0 ? currenCategories.map(category =>
                <div key={category._id} className={styles["box"]}>
                    <img src={category.imageUrl} alt="Photos" />
                    <div className={styles["image-overlay"]}>
                        <h2>{category.name}</h2>
                        <p>Prize: {category.prize}$</p>
                        <button onClick={()=>handleOption(category._id)}>View category</button>
                    </div>
                </div>) : <h2>There aren`t any categories yet</h2>}
            </section>   
                {/* TODO: Render the nature contests from the server */}
                {/* {currentContest.map(x => <ContestPreview key={x._id} contest={x}/>)} */}
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
           
            {/* <h1>There aren`t any contests for this category</h1> */}
        </main>
    )
}