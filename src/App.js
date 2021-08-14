import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import ModalTransaction from "./components/Modal/ModalTransaction";
import { GlobalStyle } from "./style/global";


function App() {
  const [modal, setModal] = React.useState(false)
  return (
    <>
      <Header setModal={setModal} />
      <Dashboard />
      <GlobalStyle />
      <ModalTransaction modal={modal} setModal={setModal} />
    </>
  );
}

export default App;
