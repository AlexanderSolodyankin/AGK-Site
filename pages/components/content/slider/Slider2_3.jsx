import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/422 2.png';

import Bottom from '../components_slides/buttoms/Buttom'

const Slider2_3 = (props) => {
  return (
    <div className={Styles.Slider2_3}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <div>
          <Title Slide7 content="БИЗНЕС" />
          <Subscript content="Бизнес-сайт - настоящее лицо Вашего бренда. Дизайн, прорабатывается в мельчайших деталях, выдерживая стиль и позицию бренда. Структура, лаконично расскажет о Вашем деле. Каждая крупинка истории бренда будет раскрываться в блоках сайта, как игра света, в гранях бриллианта." />
          </div>
          <Bottom violet />
        </div>
        <div>
          <Image src={img.src} width={300} height={354}/>
            <div className={Styles.img_shodow}></div>
        </div>
      </div>
    </div>
  )
}
export default Slider2_3