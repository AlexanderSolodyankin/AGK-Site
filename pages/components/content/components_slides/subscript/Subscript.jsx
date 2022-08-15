import React from 'react';
import Styles from './Subscript.module.scss';


function styleText (props){
  if(props.slide1)return(Styles.slider1)
  return(null)
}

const Subscript = (props) => {
  return (
   <div className={styleText(props)}>
     <div className={Styles.Subscript}>
        <p>
            {props.content}
        </p>
    </div>
   </div>
  )
}

export default Subscript