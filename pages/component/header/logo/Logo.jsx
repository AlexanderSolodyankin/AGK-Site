import React, { Component } from 'react';
import Style from './Logo.module.scss'

export default class Logo extends Component {
  render() {
    return (
      <div className={Style.Logo}>
        <div className={Style.Image}></div>
        </div>
    )
  }
}
