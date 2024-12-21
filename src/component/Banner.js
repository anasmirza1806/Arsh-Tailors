import React from 'react'
import styles from '../styles/banner.module.css'
function Banner() {
  return (
    <>
        <div className={styles.banner}>
                <div className={styles.design}>
                    <h1>Your Design, We Deliver</h1>
                    <p>Providing you with maximum level of comfort & confidence in every suits</p>
                </div>
                <div className={styles.button1}>
                    <p>Contact us</p>
                </div>
        </div> 
    </>
  )
}

export default Banner
