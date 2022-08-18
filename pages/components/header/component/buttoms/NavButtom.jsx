import React from 'react';
import styles from './NavButtom.module.scss'

function NavButtom(props) {
  return (
    <div className={styles.NavButtom}>
        <div><a href="https://wa.me/79289067890">{props.content1}</a></div>
            <div className={styles.Circle}></div>
            <div><a href="https://wa.me/79289067890">{props.content2}</a></div>
            <div className={styles.Circle}></div>
            <div><a href="https://wa.me/79289067890">{props.content3}</a></div>
    </div>
  )
}

export default NavButtom