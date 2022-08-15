import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/31фы 3.png';

import Bottom from '../components_slides/buttoms/Buttom'

const Slider6 = (props) => {
  return (
    <div className={Styles.Slider7}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <div>
          <Title Slide7 content="заявка" />
          <Subscript content="Мы ценим Ваше время и точно уверены в успехе! Остался только один вопрос. Готовы ли Вы реализовать его прямо сейчас? " />
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
export default Slider6