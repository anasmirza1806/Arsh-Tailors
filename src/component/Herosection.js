import React from 'react'
import styles from '../styles/hero.module.css'

function Herosection() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className="row">
            
            <div className="col-lg-6 col-md-6">
              <div className={styles.info}>
                <h1>Welcome to Our Website</h1>
                <h3>We Provide Ahmedabad's most exceptional stiching clothes.</h3>
                <p>We make clothes that suit you</p>
              </div>
              <div className={styles.button1}>
                <p>Visit Our Store</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection
