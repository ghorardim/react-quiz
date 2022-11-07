import React, { Fragment } from 'react';
import Checkbox from './Checkbox';
import classes from '../Styles/Answers.module.css';

export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              key={index}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              key={index}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}