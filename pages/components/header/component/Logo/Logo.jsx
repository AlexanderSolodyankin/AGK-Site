import React from 'react';
import Image from "next/image";
import style from './Logo.module.scss';

import logo2 from './media/Group 425.png';


function Logo() {
  return (
    <div className={style.Logo}>
        <Image src={logo2.src} alt="Logo" width={162} height={50} />
    </div>
  )
}

export default Logo