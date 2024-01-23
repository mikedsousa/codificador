import style from "./Container.module.css";

const Container = ({ children, classname }) => {
  return <div className={`${style.container} ${style[classname]}`}>{children}</div>;
};

export default Container;
