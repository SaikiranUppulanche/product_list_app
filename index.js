function handleFormSubmit(event) {
  event.preventDefault();
  let sellingPrice = event.target.selling_price.value;
  let productName = event.target.product_name.value;
  let category = document.getElementById("products").value;

  const obj = {
    sellingPrice,
    category,
    productName,
  };

  axios
    .post(
      "https://crudcrud.com/api/87a65b085c1248d78650576c5a0142b8/productListData",
      obj
    )
    .then((res) => {
      showProducts(res.data);
      console.log(res);
    })
    .catch((err) => console.log(err));
}

function showProducts(obj) {
  const newLi = document.createElement("li");
  newLi.id = obj._id;
  const electronics = document.getElementById("electronicItemList");
  const food = document.getElementById("foodItemList");
  const skincare = document.getElementById("skincareItemList");

  newLi.innerHTML =
    `${obj.sellingPrice} - ${obj.category} - ${obj.productName} ` +
    "<button id='delBtn' onclick ='handleDelete(event)'>Delete Product</button>";

  if (obj.category == "Electronics") {
    electronics.appendChild(newLi);
  }

  if (obj.category == "Food") {
    food.appendChild(newLi);
  }

  if (obj.category == "Skincare") {
    skincare.appendChild(newLi);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/87a65b085c1248d78650576c5a0142b8/productListData"
    )
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        showProducts(res.data[i]);
      }
    });
});

function handleDelete(event) {
  const listId = event.target.parentElement.id;
  axios
    .delete(
      `https://crudcrud.com/api/87a65b085c1248d78650576c5a0142b8/productListData/${listId}`
    )
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  event.target.parentElement.remove();
}
