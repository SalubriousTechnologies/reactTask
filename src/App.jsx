import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
