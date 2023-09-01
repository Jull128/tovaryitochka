class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(
      ({
        id,
        name,
        img,
        oldPrice,
        newPrice,
        cart,
        color,
        size,
        sortingCenter,
      }) => {
        htmlCatalog += `
          <li key='${id}' class="products__item">
            <div class="item">
              <div style='display: flex; justify-content:center; gap: 12px'>
                <div class='item__checkbox_container'>
                <input type='checkbox' class="item__checkbox" id='${id}'/>
                <label for='${id}'></label>
                </div>
                 <img src="${img}" class="item__img" />
              </div>
              <div class="item__description">
                <span class="item__name">${name}</span>
                <div class="item__properties">
                  ${color ? `<span> Размер: ${color}</span>` : ""}
                  ${size ? `<span> Размер: ${size}</span>` : ""}
                </div>
                <div class="item__sortingCenter">
                  <p>Коледино WB</p>
                  <p>${sortingCenter}</p>
                </div>
              </div>
            </div>
            <div class='counter' data-counter>
              <button class="counter__btn" onclick='decrement(${id})'>-</button>
              <input type='text' class="counter__input" disabled value='${cart}'/>
              <button class="counter__btn" onclick='increment(${id})'>+</button>
            </div>
            <div>
              <span class="item__price">${newPrice}</span>
              <span class="item__price">${oldPrice}</span>
            </div>
        </li>
        `;
      }
    );

    const html = `
      <div class='item__checkboxAll_container'>
        <input type='checkbox' class="item__checkbox" id='checkAll'/>
        <label for='checkAll'></label>
        <p>Выбрать все</p>
      </div>
      <div class="line"></div>
        <ul class='products__list'>
        ${htmlCatalog}
        </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();

const increment = (id) => {
  let selected = id;
  let search = CATALOG.find((x) => x.id === selected.id);
  if (search === undefined) {
    CATALOG.push({
      id: selected.id,
      cart: 1,
    });
  } else if (search.cart < search.availability) {
    search.cart += 1;
  }
  productsPage.render();
  console.log(CATALOG);
};

const decrement = (id) => {
  let selected = id;
  let search = CATALOG.find((x) => x.id === selected.id);
  if (search.cart === 1) return;
  else {
    search.cart -= 1;
  }
  productsPage.render();
  console.log(CATALOG);
};
