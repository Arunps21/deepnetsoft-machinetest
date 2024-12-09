import React from "react";
import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";
import MenuPage from "./components/MenuPage";
import { Route, Routes } from "react-router-dom";
import CreateMenu from "./components/CreateMenu";
import CreateItem from "./components/CreateItem";
import { ComponentProvider } from "./components/ComponentProvider";

function App() {
  return (
    <>
      <ComponentProvider>
        <NavbarPage />
        <Routes>
          <Route path="/createMenu" element={<CreateMenu />} />
          <Route path="/createItem" element={<CreateItem />} />
          <Route path="/" element={<MenuPage />} />
        </Routes>
        <FooterPage />
      </ComponentProvider>
    </>
  );
}

export default App;
