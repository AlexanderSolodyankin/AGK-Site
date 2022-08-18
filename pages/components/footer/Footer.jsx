import React from 'react';
import Styles from './Footer.module.scss';
import Image from 'next/image';

import phone from'./media/icons/phone.png';
import home from'../footer/media/icons/home.png';
import perArc from'../footer/media/icons/persArc.png';
import news from'../footer/media/icons/news.png';
import portfolio from'../footer/media/icons/portfolio.png';


const Footer = () => {
  return (
    <div>
    <div className={Styles.Footer}>
        <div className={Styles.corner}></div>
        <div className={Styles.conteiner}>
            <div><a href="https://wa.me/79289067890"><Image src={phone.src} width={60} height={60}/></a></div>
            <div><a href="https://wa.me/79289067890"><Image src={home.src} width={60} height={60}/></a></div>
            <div><a href="https://wa.me/79289067890"><Image src={perArc.src} width={60} height={60}/></a></div>
            <div><a href="https://wa.me/79289067890"><Image src={news.src} width={60} height={60}/></a></div>
            <div><a href="https://wa.me/79289067890"><Image src={portfolio.src} width={60} height={60}/></a></div>
        </div>
        <div className={Styles.number}></div>

    </div>
    </div>
  )
}

export default Footer