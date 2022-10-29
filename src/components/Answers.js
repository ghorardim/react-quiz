import React from 'react'
import Checkbox from './Checkbox'
import classes from "../Styles/Answers.module.css";

export default function Answers() {
  return (
    <div className={classes.answers}>
        <Checkbox className={classes.answer} text="mcq option"/>
    </div>
  )
}