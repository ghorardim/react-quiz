import React from 'react';
import Questions from './Questions';
import classes from '../Styles/Analysis.module.css';

export default function Analysis({ answers, corretCnt, noq }) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {corretCnt} out of {noq} questions correctly
      </h4>
      <Questions answers={answers}/>
    </div>
  );
}