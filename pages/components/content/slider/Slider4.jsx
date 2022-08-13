import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/iPad-Pro-Mockup 4.png';

const Slider4 = (props) => {
  return (
    <div className={Styles.Slider4}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <Title content="КАЧЕСТВО" />
          <Subscript content="Продуманная логическая структура разработанная индивидуально для вашего дела, даст понимание о продукте и окажет внимание к клиенту, что даст ему ощущение заботы о нём. Ваш сайт сможет влиять на выбор клиента и снимет дополнительную нагрузку с персонала. Визуал - что-то связанное со спокойствием и умиротворением, но не отходя от тематики сайтостроения." />
        </div>
        <div>
          <Image src={img.src} width={550} height={444}/>
            <div className={Styles.img_shodow}></div>
        </div>
      </div>
    </div>
  )
}
export default Slider4