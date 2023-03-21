import "./Header.styles.css";

function Header({ menu }) {
  return (
    <nav className="menu">
      {menu.map((menuItem) => {
        return (
          <li key={menuItem.id}>
            <a href={menuItem.path}>{menuItem.title}</a>
          </li>
        );
      })}
    </nav>
  );
}

export default Header;
