import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/iPad-Pro-Mockup 3.png';

const Slider3 = (props) => {
  return (
    <div className={Styles.Slider3}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <Title Bed content="ПОКАЗАТЕЛИ" />
          <Subscript content="Какой тип сайта Вы не выберете для своего бизнеса, можете быть уверены, что он будет отвечать всем современным требованиям." />
          <Subscript content="- легкое управление через CMS" />
          <Subscript content="- адаптивный дизайн" />
          <Subscript content="- высокая конверсия" />
          <Subscript content="- быстрая скорость загрузки" />
          <Subscript content="- современная SEO оптимизация" />
        </div>
        <div>
          <Image src={img.src} width={460} height={581}/>
            <div className={Styles.img_shodow}>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Slider3