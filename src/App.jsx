import Header from "./components/Header";

function App() {
  const menuItems = [
    {
      id: "0001",
      title: "home",
      path: "/home",
    },
    {
      id: "0002",
      title: "contato",
      path: "/contato",
    },
  ];

  return (
    <>
      <Header menu={menuItems} />
    </>
  );
}

export default App;
