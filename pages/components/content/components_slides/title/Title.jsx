import React from 'react';
import Styles from './Title.module.scss';

const styleProps = (props) => {
  if(props.red) return (Styles.red)
  else return(Styles.white)
}

const Title = (props) => {
  return (
    <div className={Styles.text}>
      <div></div>
        <h2 className={styleProps(props)}>
          {props.content}
        </h2>
        <div className={Styles.line_font}></div>
    </div>
  )
}

export default Title