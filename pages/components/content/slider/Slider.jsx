import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
// import ImegContent from '../components_slides/img-content/ImegContent';

import Image from 'next/image';

import img from '../media/iPad-Pro-Mockup 3.png';




const Slider = (props) => {
  return (
    <div className={Styles.Slider}>
        <div className={Styles.Discript}>
        <Title Bed content={props.Title}/>
        <Subscript content={props.Subscript}/>
        </div>
        <Image src={img.src}
         width={360}
         height={281}
         className={Styles.img}
        />  
    </div>
  )
}

export default Slider