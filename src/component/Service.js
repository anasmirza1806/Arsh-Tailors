import React from 'react'
import styles from '../styles/service.module.css'

function Service() {
    return (
        <>
            <div className="containerfluid ">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className={styles.service}>
                                <div className={styles.image}>
                                    <img src='../images/service1.png' />
                                </div>
                                <div className={styles.data}>
                                    <span>1</span>
                                    <h3>Tailor Sweing</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum odit odio temporibus, delectus quam deleniti incidunt atque doloremque dolorum corrupti?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className={styles.service}>
                                <div className={styles.image}>
                                    <img src='../images/service2.png' />
                                </div>
                                <div className={styles.data}>
                                    <span>2</span>
                                    <h3>Mesurement</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum odit odio temporibus, delectus quam deleniti incidunt atque doloremque dolorum corrupti?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className={styles.service}>
                                <div className={styles.image}>
                                    <img src='../images/service3.png' />
                                </div>
                                <div className={styles.data}>
                                    <span>3</span>
                                    <h3>Ready-made</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum odit odio temporibus, delectus quam deleniti incidunt atque doloremque dolorum corrupti?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={styles.choose}>
                            <h1>Why Choose us?</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.content}>
                                <img src='../images/choose1.svg' />
                                <h3>Quality Materials</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem est quam tempora nam eius quaerat iste error perspiciatis asperiores!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.content}>
                                <img src='../images/choose2.svg' />
                                <h3>Modern Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem est quam tempora nam eius quaerat iste error perspiciatis asperiores!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.content}>
                                <img src='../images/choose3.svg' />
                                <h3>Professional Work</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem est quam tempora nam eius quaerat iste error perspiciatis asperiores!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.content}>
                                <img src='../images/choose4.svg' />
                                <h3>Perfect Precision</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem est quam tempora nam eius quaerat iste error perspiciatis asperiores!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
