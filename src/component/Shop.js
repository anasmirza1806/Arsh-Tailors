import React from 'react'
import styles from '../styles/shop.module.css'
import { Link } from 'react-router-dom'
function Shop() {
    return (
        <>
            <div className="contanerfluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src='./images/shop1.jpg'/>
                                </div>
                                <div className={styles.details}>
                                    <h3>Product Name</h3>
                                    <p>Rs. 8000</p>
                                </div>
                                <div className={styles.button1}>
                                    <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src='./images/shop2.jpg'/>
                                </div>
                                <div className={styles.details}>
                                    <h3>Product Name</h3>
                                    <p>Rs. 8000</p>
                                </div>
                                <div className={styles.button1}>
                                    <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src='./images/shop1.jpg'/>
                                </div>
                                <div className={styles.details}>
                                    <h3>Product Name</h3>
                                    <p>Rs. 8000</p>
                                </div>
                                <div className={styles.button1}>
                                    <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src='./images/shop2.jpg'/>
                                </div>
                                <div className={styles.details}>
                                    <h3>Product Name</h3>
                                    <p>Rs. 8000</p>
                                </div>
                                <div className={styles.button1}>
                                    <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button2}>
                            <Link to={'./gallery'}><p>Show More <i class="fa-solid fa-arrow-right"></i></p></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Shop
