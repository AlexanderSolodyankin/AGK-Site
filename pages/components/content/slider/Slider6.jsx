import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/ва 1.png';

const Slider6 = (props) => {
  return (
    <div className={Styles.Slider6}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <Title Slide6 content="ПОДДЕРЖКА" />
          <Subscript content="Согласование всех этапов разработки и поддержка вашего ресурса. На всех этапах работы вы контролируете и принимаете участие в создании своего механизма привлечения клиентов. Мы прекрасно понимаем, что лучше вас, ваш бизнес, знаете только Вы. Мы можем только помочь в реализации ваших идей. " />
        </div>
        <div>
          <Image src={img.src} width={501} height={376}/>
            <div className={Styles.img_shodow}></div>
        </div>
      </div>
    </div>
  )
}
export default Slider6