import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
// import ImegContent from '../components_slides/img-content/ImegContent';

import Image from 'next/image';

import img from '../media/iPad-Pro-Mockup 3.png';


const SlideStyle = (props) => {
  if (props.slide3) return (Styles.Slider3)
  else return (Styles.Other)
}



const Slider3 = (props) => {
  return (
    <div className={SlideStyle(props)}>
      <div className={Styles.Slider}>
        <div className={Styles.Discript}>
          <Title content="ПОКАЗАТЕЛИ" />
          <Subscript content="Какой тип сайта Вы не выберете для своего бизнеса, можете быть уверены, что он будет отвечать всем современным требованиям." />
          <Subscript content="- легкое управление через CMS" />
          <Subscript content="- адаптивный дизайн" />
          <Subscript content="- высокая конверсия" />
          <Subscript content="- быстрая скорость загрузки" />
          <Subscript content="- современная SEO оптимизация" />
        </div>
        <div className={Styles.img}>
          <Image src={img.src}
            width={460} height={581} className={Styles.box_shodow}/>
            <div className={Styles.img_shodow}>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Slider3