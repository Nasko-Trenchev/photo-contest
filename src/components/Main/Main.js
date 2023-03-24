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
        </main>
    )
}