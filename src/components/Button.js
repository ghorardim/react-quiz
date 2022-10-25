import classes from "../Styles/Button.module.css";
export default function Button({children}) {
  return (
    <div class={classes.button}>
      <span>{children}</span>
    </div>
  );
}