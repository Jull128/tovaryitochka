const increment = (id) => {
  let selected = id;
  let search = CATALOG.find((x) => x.id === selected.id);
  if (search.cart < search.availability) {
    search.cart += 1;
  } else return "";

  console.log(JSON.parse(localStorage.getItem("products", search)));

  productsPage.render();
};

const decrement = (id) => {
  let selected = id;
  let search = CATALOG.find((x) => x.id === selected.id);
  if (search.cart === 0) return;
  else {
    search.cart -= 1;
  }
  productsPage.render();
  console.log(CATALOG);
};
