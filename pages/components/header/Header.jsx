import React from 'react';
import styles from './Header.module.scss';

import NavButtom from './component/buttoms/NavButtom';
import Logo from './component/Logo/Logo';

function Header() {
  return (
    <div className={styles.Header}>
      <NavButtom content1="Услуги" content2="Схема работы" content3="Отзывы"/>
      <Logo/>
      <NavButtom content1="Портфолио" content2="Новости" content3="Контакты"/>            
    </div>
  )
}

export default Header