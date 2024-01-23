import ProductList from "./ProductList";

const Product = (props) => {
  const electronic = props.product.filter(
    (item) => item.category === "Electronics"
  );

  const food = props.product.filter((item) => item.category === "Food");

  const skincare = props.product.filter((item) => item.category === "Skincare");

  return (
    <div className="w-full  ">
      <h1 className="text-start text-4xl ps-5 my-4">Products</h1>
      <h2 className="text-start text-2xl ps-5 my-2">Electronics Items</h2>
      {electronic.length > 0 && (
        <ProductList
          category="Electronics"
          categoryItem={electronic}
          onDelete={props.handleDelete}
        />
      )}
      <h2 className="text-start text-2xl ps-5 my-2">Food Items</h2>
      {food.length > 0 && (
        <ProductList
          category="Food"
          categoryItem={food}
          onDelete={props.handleDelete}
        />
      )}
      <h2 className="text-start text-2xl ps-5 my-2">Skincare Items</h2>
      {skincare.length > 0 && (
        <ProductList
          category="Skincare"
          categoryItem={skincare}
          onDelete={props.handleDelete}
        />
      )}
    </div>
  );
};

export default Product;
