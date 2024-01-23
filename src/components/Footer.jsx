import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <p className={style.footer}>
        Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/mike-de-sousa/" target="_blank">
          Mike de Sousa
        </a>{" "}
        | 2024
      </p>
    </>
  );
};

export default Footer;
