const increment = (id) => {
  let selected = id;
  let search = CATALOG.find((x) => x.id === selected.id);
  if (search.cart < search.availability) {
    search.cart += 1;
  } else return "";

  // localStorage.setItem("data", JSON.stringify(search));

  update(selected.id);
  calculation();
};

const decrement = (id) => {
  let selected = id;
  let search = CATALOG.find((x) => x.id === selected.id);
  if (search.cart === 0) return;
  else {
    search.cart -= 1;
  }
  update(selected.id);
};

let update = (id) => {
  let search = CATALOG.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.cart;
};

let calculation = (id) => {
  let cartIcon = document.getElementById("cartAmount");
  let cartLength = Object.keys(CATALOG.map((x) => x.cart)).length;
  cartIcon.innerHTML = cartLength;
  console.log(cartLength.length);
};
calculation();
