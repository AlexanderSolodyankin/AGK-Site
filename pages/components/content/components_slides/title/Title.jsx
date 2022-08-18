import React from 'react';
import Styles from './Title.module.scss';

const styleProps = (props) => {
  if(props.Blue) return (Styles.line_blue)
  if(props.Slide4)return(Styles.line_slide4)
  if(props.Slide5)return(Styles.line_slide5)
  if(props.Slide6)return(Styles.line_slide6)
  if(props.Slide7)return(Styles.line_slide7)
  if(props.Slide2_1)return(Styles.line_slide2_1)
  if(props.Slide2_2)return(Styles.line_slide2_2)
  if(props.Slide2_3)return(Styles.line_slide2_3)
  
  else return(Styles.line_font)
}


const Title = (props) => {
  return (
    <div className={Styles.text}>
        <h2 className={Styles.white}>
          {props.content}
        </h2>
        <div className={styleProps(props)}></div>
    </div>
  )
}

export default Title