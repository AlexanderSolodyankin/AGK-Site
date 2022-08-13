import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
import Image from 'next/image';

import img from '../media/апсмт 1.png';

const Slider5 = (props) => {
  return (
    <div className={Styles.Slider5}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <Title Slide5 content="ДЕНЬГИ" />
          <Subscript content="Позвольте вашему сайту работать на вас. Приятная визуализация, нейромаркетинговая воронка, идеальное торговое предложение - ваш ресурс может экономить время, работать 24/7 и позволит решить рутинные задачи. Сайт - ещё одна шестерёнка в вашем механизме и должен приносить прибыль, а не висеть ссылкой в Интернете." />
        </div>
        <div>
          <Image src={img.src} width={550} height={444}/>
            <div className={Styles.img_shodow}></div>
        </div>
      </div>
    </div>
  )
}
export default Slider5