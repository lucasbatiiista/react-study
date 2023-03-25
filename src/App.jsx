import "./styles/global-styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { PATH_CONTACT, PATH_HOME, PATH_PRODUCTS } from "./consts/routes";

function App() {
  const menuItems = [
    {
      id: "home",
      path: PATH_HOME,
      title: "Home",
    },
    {
      id: "products",
      path: PATH_PRODUCTS,
      title: "Produtos",
    },
    {
      id: "contact",
      path: PATH_CONTACT,
      title: "Contato",
    },
  ];

  return (
    <BrowserRouter>
      <Header menu={menuItems} />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
