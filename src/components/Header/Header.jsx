import "./Header.styles.scss";
import logoImg from "./../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Header({ menu = [] }) {
  const navigate = useNavigate();

  function changePage(path) {
    navigate(path);
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoImg} alt="" />
      <nav className="menu">
        {menu.map((menuItem) => {
          return (
            <li className="menu__item" key={menuItem.id}>
              <button onClick={() => changePage(menuItem.path)}>{menuItem.title}</button>
            </li>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
