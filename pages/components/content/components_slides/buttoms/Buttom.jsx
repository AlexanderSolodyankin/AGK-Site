import React from 'react';
import Styles from './Buttoms.module.scss';

function color (props){
  if(props.violet) return(Styles.violet)
  if(props.Red) return(Styles.red)
  return(null)
}

 const Buttom = (props) => {
  return (
    <div className={color(props)}>
    <div className={Styles.ButtomConteiner}>
        <a href="https://wa.me/79289067890"
        className={Styles.Buttom}
        >
            Оставить заявку
            </a>
    </div>
    </div>
  )
}
export default Buttom
