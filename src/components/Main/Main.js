import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './Main.module.css'

import { getAllCategories } from '../../services/CategoryService'

export default function Main() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then(result => {
                setCategories(result);
            })
            .catch(err => {
                console.log(err)
            });

    }, [])

    const navigate = useNavigate();

    const handleOption = (id) => {
        navigate(`/categories/${id}`);
    };

    return (
        <main className={styles['gallery']}>
            <h1>Welcome to the photo gallery!</h1>

            {categories.length !== 0 && <h2>Select category to participate in:</h2>}

            <section>
                {categories.map(category =>
                    <div key={category._id} className={styles["box"]}>
                        <img src={category.imageUrl} alt="Category" />
                        <div className={styles["image-overlay"]}>
                            <h2>{category.name}</h2>
                            <button onClick={() => handleOption(category._id)}>View category</button>
                        </div>
                    </div>)}
                {categories.length === 0 && <h2>There aren`t any categories, yet</h2>}
            </section>
        </main>
    )
}