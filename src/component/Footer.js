import React from 'react'
import styles from '../styles/footer.module.css'
function Footer() {
    return (
        <>
            <div className={styles.footer}>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={styles.rghtfot}>
                                <div className={styles.logo}>
                                    <img src="./images/logo.jpg" alt="" />
                                </div>
                                <p>Arsh Tailor,opp. Shoail Parlor,
                                    Lal School,Sarkiwad,
                                    Shahpur,380001.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.centerfoot}>
                                <h2>Quick Links</h2>
                                <p>Home</p>
                                <p>Shop</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.centerfoot}>
                                <h2>Policy Links</h2>
                                <p>Home</p>
                                <p>Shop</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.leftfoot}>
                                <h2>Contact us</h2>
                                <p>arshtailor@gmail.com</p>
                                <p>+91 98758 XXXXX</p>
                                <p>Ahmedabad, India</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer
