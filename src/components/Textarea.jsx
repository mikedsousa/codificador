import style from "./Textarea.module.css";

const Textarea = ({ placeholder, handleChange }) => {
  return (
    <>
      <textarea className={style.textarea} onChange={handleChange} placeholder={placeholder} ></textarea>
    </>
  );
};

export default Textarea;
