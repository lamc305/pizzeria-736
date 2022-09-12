import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ReducerContextProvider } from "./contexto/reducerContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <ReducerContextProvider>
        <AnimatedRoutes />
      </ReducerContextProvider>
    </BrowserRouter>
  );
}

export default App;