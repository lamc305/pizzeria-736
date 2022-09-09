import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { ReducerContextProvider } from "./contexto";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <HashRouter>
      <ReducerContextProvider>
        <AnimatedRoutes />
      </ReducerContextProvider>
    </HashRouter>
  );
}

export default App;