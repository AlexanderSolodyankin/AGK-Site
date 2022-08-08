import React, { Component } from 'react';
import HeaderStyle from './Header.module.scss'

import Logo from './logo/Logo';
import Circle from './circle/Circle';

export default class Header extends Component {
  render() {
    return (
      <div className={HeaderStyle.Header}>
           <div className={HeaderStyle.HeaderLeft}>
            <div><a href="#">Услуги</a></div>
            <div className={HeaderStyle.Circle}></div>
            <div><a href="#"> Схема работы</a></div>
            <div className={HeaderStyle.Circle}></div>
            <div><a href="#">Отзывы</a></div>
           </div>
           <div>
            <Logo/>
           </div>
           <div className={HeaderStyle.HeaderLeft}>
            <div><a href="#">Портфолио</a></div>
            <div className={HeaderStyle.Circle}></div>
            <div><a href="#">Новости</a></div>
            <div className={HeaderStyle.Circle}></div>
            <div><a href="#">Контакты</a></div>
           </div>
            
        </div>
    )
  }
}
