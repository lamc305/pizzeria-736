import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ReducerContextProvider } from "./contexto/reducerContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import ModalContextProvider from "./contexto/modalContext";

function App() {
  return (
    <BrowserRouter>
      <ReducerContextProvider>
        <ModalContextProvider>
          <AnimatedRoutes />
        </ModalContextProvider>
      </ReducerContextProvider>
    </BrowserRouter>
  );
}

export default App;