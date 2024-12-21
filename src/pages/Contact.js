import React from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
    return (
        <>
            <div className="containerfluid">
                <div className="container">
                    <div className={styles.contactmain}>
                        <div>
                            <h1>Contact</h1>
                            <div className="row">
                                <div className="col-6 col-md-6 col-12">
                                    <div className={styles.name}>
                                        <input type='text' placeholder='Name *' />
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-12">
                                    <div className={styles.name}>
                                        <input type='text' placeholder='Email *' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className={styles.name}>
                                        <input type='text' placeholder='Phone number *' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className={styles.name}>
                                        <textarea cols={50} rows={5} placeholder='comment' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className={styles.button1}>
                                    Send
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactmap}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <img src="./images/about_center.webp" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29373.201695849202!2d72.5614193347656!3d23.036612000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c0612a5ca5%3A0x6892b1c0f69f5ed!2sArsh%20Tailor!5e0!3m2!1sen!2sin!4v1730289488966!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
