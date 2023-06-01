import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { ReducerContextProvider } from "./contexto/reducerContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import ModalContextProvider from "./contexto/modalContext";

function App() {
  return (
    <HashRouter>
      <ReducerContextProvider>
        <ModalContextProvider>
          <AnimatedRoutes />
        </ModalContextProvider>
      </ReducerContextProvider>
    </HashRouter>
  );
}

export default App;
