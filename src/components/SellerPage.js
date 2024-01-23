import { useState } from "react";
import Input from "./Input";

import Button from "./Button";

const SellerPage = (props) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Electronics");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id === "" || price === "" || name === "") return;
    const obj = {
      id,
      price,
      name,
      category,
    };

    props.onAdd(obj);
    setId("");
    setCategory("Electronics");
    setName("");
    setPrice("");
  };

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-7 py-7 my-8 text-orange-500 bg-gray-700">
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          label="Product ID"
          id="productId"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="number"
          label="Selling Price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          label="Product Name"
          id="productName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="me-4">Choose a Category</label>
        <select
          className="outline-none rounded-md py-2 mb-3 me-5 px-5 mt-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>

        <Button
          className="outline-none bg-blue-600 text-white px-3 py-2 ms-9 shrink-0 rounded-md"
          type="submit"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default SellerPage;
