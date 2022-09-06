
import Menu from "./Page/Menu";
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Cart from "./Page/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
