import Button from "./Button";

const ProductList = (props) => {
  return (
    <ul className="mx-5 px-4 rounded-lg">
      {props.categoryItem.map((item) => (
        <li className="my-2 text-black text-lg" key={item.id}>
          {item.price} - {item.name} - {item.category}
          <Button
            className="outline-none bg-red-600 text-white px-3 py-1 shrink-0 rounded-md ms-6 "
            onClick={() => props.onDelete(item.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
