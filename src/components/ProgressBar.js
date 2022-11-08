import React, { useRef, useState } from 'react';
import classes from '../Styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ next, prev, submit, progress }) {
  const [toolTip, setToolTip] = useState(false);
  const toolTipRef = useRef();
  const toggleToolTip = () => {
    if (toolTip) {
      toolTipRef.current.style.display = 'none';
      setToolTip(false);
    } else {
      toolTipRef.current.style.display = 'block';
      toolTipRef.current.style.left = `calc(${progress}% - 65px)`;
      setToolTip(true);
    }
  };
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={toolTipRef}>
          {progress}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleToolTip}
            onMouseOut={toggleToolTip}></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? 'Submit Answer' : 'Next Question'}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}