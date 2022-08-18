import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/345 1.png';

import Bottom from '../components_slides/buttoms/Buttom'

const Slider2_2 = (props) => {
  return (
    <div className={Styles.Slider2_2}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <div>
          <Title Slide2_2 content="Магазин" />
          <Subscript content="Каждая полоса дизайн-проекта сверяется с десятком вариантов и выбирается именно та, которая максимально передаст атмосферу бизнеса. Проработанная структура сайта, работает на увеличение продаж и повышение доверия клиентов к бренду. " />
          </div>
          <Bottom Red />
        </div>
        <div>
          <Image src={img.src} width={490} height={563}/>
            <div className={Styles.img_shodow}></div>
        </div>
      </div>
    </div>
  )
}
export default Slider2_2