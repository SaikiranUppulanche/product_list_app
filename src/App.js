import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import SellerPage from "./components/SellerPage";

function App() {
  const [product, setProduct] = useState([]);

  const handleProductAdd = (product) => {
    setProduct((prev) => {
      const newProduct = [...prev, product];
      const updatedObject = JSON.stringify(newProduct);
      localStorage.setItem("Product", updatedObject);
      return newProduct;
    });
  };

  const handleProductDelete = (id) => {
    setProduct((prev) => {
      const newProduct = prev.filter((item) => item.id !== id);

      localStorage.setItem("Product", JSON.stringify(newProduct));
      return newProduct;
    });
  };

  useEffect(() => {
    const data = localStorage.getItem("Product");
    if (data) {
      const updatedData = JSON.parse(data);
      setProduct(updatedData);
    }
  }, []);

  return (
    <>
      <SellerPage onAdd={handleProductAdd} />
      <Product product={product} handleDelete={handleProductDelete} />
    </>
  );
}

export default App;
