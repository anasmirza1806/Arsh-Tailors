import React from 'react'
import styles from '../styles/about.module.css'

function About() {
    return (
        <>
            <div className={styles.about}>
                <div className="row g-0">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className={styles.aboutimg}>
                            <img src="../images/about1.jpg" alt="" />
                            <div className={styles.childimg}>
                                <img src="../images/about2.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className={styles.aboutcontet}>
                            <h1>About Our tailor house</h1>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur nulla minima laborum velit dolor.</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, corporis consequatur aperiam magni dolores nemo dignissimos asperiores alias ducimus nostrum.</p>
                            <div className="button1">
                                More About us
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className={styles.social}>
                            <h2>Follow us on Instagram</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">

                            <div className={styles.insta}>
                                <img src="../images/about1.jpg" alt="" />
                                <div className={styles.overlap}>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className={styles.insta}>
                                <img src="../images/about2.jpg" alt="" />
                                <div className={styles.overlap}>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className={styles.insta}>
                                <img src="../images/about2.jpg" alt="" />
                                <div className={styles.overlap}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
