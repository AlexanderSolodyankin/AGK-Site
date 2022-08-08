import React, { Component } from 'react';
import Style from './Circle.module.scss';

export class Circle extends Component {
  render() {
    return (
      <div className={Style.Circle}></div>
    )
  }
}

export default Circle