import classes from '../Styles/Button.module.css';
export default function Button({ children, className }) {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
}