import React from 'react';
import Styles from './Slide1.module.scss';

export default function Slide1() {
  return (
    <div className={Styles.Slide1}>
        <div className={Styles.Element1}>
            <div className={Styles.ImgLogo}></div>
            <div className={Styles.Title}>Media агенство</div>
            <p className={Styles.ContentText}>Мы не говорим о себе, а делаем то, что нравится Вашим клиентам, а Вам приносит желаемый результат!</p>

        </div>
        <div>
            <div className={Styles.ImgPhone}></div>
        </div>
    </div>
  )
}
