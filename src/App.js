import React from "react";
import Menu from "./Page/Menu";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/index";
import Cart from "./Page/Cart/index";
import { ReducerContextProvider } from "./contexto";

function App() {
  return (
    <BrowserRouter>
      <ReducerContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ReducerContextProvider>
    </BrowserRouter>
  );
}

export default App;