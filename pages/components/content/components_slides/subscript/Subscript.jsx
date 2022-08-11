import React from 'react';
import Styles from './Subscript.module.scss';

const Subscript = (props) => {
  return (
    <div className={Styles.Subscript}>

        <p>
            {props.content}
        </p>

    </div>
  )
}

export default Subscript