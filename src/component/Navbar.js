import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
    const [open, setOpen] = useState(false);
    const togglemenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <nav>
                <div className={styles.navigate}>
                    <div className={styles.logo}>
                        <img src="./images/logo.jpg" alt="" />
                    </div>
                    <div className={styles.main}>
                        <ul id={styles.navbar} className={open ? styles.active : ""}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>   
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div id={styles.mobile} onClick={togglemenu}>
                        {open ? <i class="fa-solid fa-times"></i> : <i class="fa-solid fa-bars"></i> }
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
