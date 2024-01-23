import style from "./OutputBox.module.css";
import placeholder from "../assets/placeholder.svg";

const OutputContent = () => {
  return (
    <>
      <div className={style.placeholder}>
        <img src={placeholder} alt="placeholder" />
        <div>
          <strong>Nenhuma mensagem encontrada</strong>
          <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
      </div>
    </>
  );
};

export default OutputContent;
