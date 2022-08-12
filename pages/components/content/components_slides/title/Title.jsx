import React from 'react';
import Styles from './Title.module.scss';

const styleProps = (props) => {
  console.log("Пришло " + props )
  if(props.Blue) return (Styles.line_blue)
  
  else return(Styles.line_font)
}


const Title = (props) => {
  return (
    <div className={Styles.text}>
      <div></div>
        <h2 className={Styles.white}>
          {props.content}
        </h2>
        <div className={styleProps(props)}></div>
    </div>
  )
}

export default Title