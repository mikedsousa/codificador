import style from "./Button.module.css";

const Button = ({ classname, value, handleAction }) => {
  return <button onClick={handleAction} className={`${style[classname]} ${style.button}`}>{value}</button>;
};

export default Button;
