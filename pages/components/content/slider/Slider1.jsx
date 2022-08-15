import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/Group 165.png';
import imgLogo from '../media/GK лого.png';

const Slider1 = (props) => {
  return (
    <div className={Styles.Slider1}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <Image src={imgLogo.src} width={650} height={196}/>
          <Title content="Media агенство" />
          <Subscript slide1 content="Мы не говорим о себе, а делаем то, что нравится Вашим клиентам, а Вам приносит желаемый результат!" />
        
        </div>
        <div>
          <Image src={img.src} width={453} height={624}/>
            <div className={Styles.img_shodow}></div>
        </div>
      </div>
    </div>
  )
}
export default Slider1