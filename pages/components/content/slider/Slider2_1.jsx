import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/iPhone-12-Mockup 8.png';

import Bottom from '../components_slides/buttoms/Buttom'

const Slider2_1 = (props) => {
  return (
    <div className={Styles.Slider2_1}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <div>
          <Title Slide7 content="ЛЕНДИНГ" />
          <Subscript content="Проработанная структура каждого блока сайта, покажет Ваш товар или услугу с самой выгодной стороны. Закрытие возражений и активация лояльности клиентов к бренду. Качественный UI/UX дизайн Premium-уровня. Всё это позволит Вам шагнуть далеко вперед ваших конкурентов. " />
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
export default Slider2_1