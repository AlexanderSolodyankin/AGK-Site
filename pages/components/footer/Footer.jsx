import React from 'react';
import Styles from './Footer.module.scss';


const Footer = () => {
  return (
    <div>
    <div className={Styles.Footer}>
        <div className={Styles.corner}></div>
        <div className={Styles.conteiner}>
            <div className={Styles.Elipse}><a className={Styles.phone}  href="https://wa.me/79289067890"></a></div>
            <div className={Styles.Elipse}><a className={Styles.portfolio} href="https://wa.me/79289067890"></a></div>
            <div className={Styles.Elipse}><a className={Styles.home} href="https://wa.me/79289067890"></a></div>
            <div className={Styles.Elipse}><a className={Styles.news} href="https://wa.me/79289067890"></a></div>
            <div className={Styles.Elipse}><a className={Styles.personArea} href="https://wa.me/79289067890"></a></div>
        </div>
        <div className={Styles.number}></div>

    </div>
    </div>
  )
}

export default Footer