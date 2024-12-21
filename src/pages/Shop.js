import React from 'react'
import styles from '../styles/shop.module.css'

function Shop() {
    return (
        <>
            <div className="container">
                <div className={styles.shop}>
                    <div className={styles.headshop}>
                        <div className={styles.search}>
                            <input type='text' placeholder='Search...' />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={styles.filter}>
                            <select name="" id="">
                                <option value="Default Sorting">Default Sorting</option>
                                <option value="Default Sorting">Sort by latest</option>
                                <option value="Default Sorting">Sort by Popularity</option>
                                <option value="Default Sorting">Sort by pirce: Low to High</option>
                                <option value="Default Sorting">Sort by Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={styles.category}>
                                <h3>Products</h3>
                                <input type='checkbox' name='Formal' value='Formal' /> Formal <br/>
                                <input type='checkbox' name='Kurta' value='Kurta' /> Kurta <br/>
                                <input type='checkbox' name='Pathani' value='Pathani' /> Pathani <br/>
                                <input type='checkbox' name='Jodhpuri' value='Jodhpuri' /> Jodhpuri <br/>
                                <input type='checkbox' name='Koti' value='Koti' /> Koti <br/>
                                <input type='checkbox' name='Suit' value='Suit' /> Suit <br/>
                                <input type='checkbox' name='Tecxido' value='Tecxido' /> Tecxido<br/>

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className={styles.card}>
                                        <div className={styles.img}>
                                            <img src='./images/shop1.jpg' />
                                        </div>
                                        {/* <div className={styles.details}>
                                            <h3>Product Name</h3>
                                            <p>Rs. 8000</p>
                                        </div>
                                        <div className={styles.button1}>
                                            <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className={styles.card}>
                                        <div className={styles.img}>
                                            <img src='./images/shop1.jpg' />
                                        </div>
                                        {/* <div className={styles.details}>
                                            <h3>Product Name</h3>
                                            <p>Rs. 8000</p>
                                        </div>
                                        <div className={styles.button1}>
                                            <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className={styles.card}>
                                        <div className={styles.img}>
                                            <img src='./images/shop1.jpg' />
                                        </div>
                                        {/* <div className={styles.details}>
                                            <h3>Product Name</h3>
                                            <p>Rs. 8000</p>
                                        </div>
                                        <div className={styles.button1}>
                                            <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className={styles.card}>
                                        <div className={styles.img}>
                                            <img src='./images/shop2.jpg' />
                                        </div>
                                        {/* <div className={styles.details}>
                                            <h3>Product Name</h3>
                                            <p>Rs. 8000</p>
                                        </div>
                                        <div className={styles.button1}>
                                            <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className={styles.card}>
                                        <div className={styles.img}>
                                            <img src='./images/shop2.jpg' />
                                        </div>
                                        {/* <div className={styles.details}>
                                            <h3>Product Name</h3>
                                            <p>Rs. 8000</p>
                                        </div>
                                        <div className={styles.button1}>
                                            <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className={styles.card}>
                                        <div className={styles.img}>
                                            <img src='./images/shop2.jpg' />
                                        </div>
                                        {/* <div className={styles.details}>
                                            <h3>Product Name</h3>
                                            <p>Rs. 8000</p>
                                        </div>
                                        <div className={styles.button1}>
                                            <p>Add to Cart <i class="fa-solid fa-bag-shopping"></i></p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className={styles.pagination}>
                                    <button className={styles.btn1}>1</button>
                                    <button className={styles.btn1}>2</button>
                                    <button className={styles.btn1}>3</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Shop
