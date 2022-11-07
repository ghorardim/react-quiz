import React, { useRef, useState } from 'react';
import classes from '../Styles/Miniplayer.module.css';
import ReactPlayer from 'react-player';

export default function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  const toggleMiniPlayer = () => {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  };
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}>
      <span
        className={`material-icons-outlined ${classes.player} ${classes.open}`}>
        {' '}
        play_circle_filled{' '}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}>
        {' '}
        close{' '}
      </span>
      <ReactPlayer
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}