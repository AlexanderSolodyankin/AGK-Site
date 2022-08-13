import React from 'react';
import Styles from './Slider.module.scss';



import Title from '../components_slides/title/Title';
import Subscript from '../components_slides/subscript/Subscript';
// import ImegContent from '../components_slides/img-content/ImegContent';

import Image from 'next/image';
import Slider3 from './Slider3';

const Slider = (props) => {
  return (
    <div className={Styles.Slider}>
        <div className={Styles.Discript}>         
        <Title
        content={props.Title}
        />
       <Subscript content={props.Subscript}/>
        </div>
        <Image src={props.ImgURL} width={props.ImgWidth} height={props.ImgHeight} />  
    </div>
  )
}



export default Slider