import styles from './Button.module.css'
import {MdMessage} from 'react-icons/md'
import React from 'react'

const Button = (props) => {
  const {isOutline,icon,text}=props;
  return (
    <button className={ isOutline?styles.outline_btn :styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button