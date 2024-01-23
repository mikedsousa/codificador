import Logo from '../assets/top-icon.svg';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={Logo} alt="Logo" />
    </header>
  )
}

export default Header