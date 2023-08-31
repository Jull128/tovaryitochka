class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach((el) => {
      htmlCatalog += `
          <li key=${el.id} class="products__item">
          <div class="item">
<div style='display: flex; justify-content:center; gap: 12px'>
<div class='item__checkbox_container'>
          <input type='checkbox' class="item__checkbox" id=${el.id}>
          <label for=${el.id}></label>
          </div>
          <img src="${el.img}" class="item__img" />
          </div>
            <div class="item__description">
          <span class="item__name">${el.name}</span>
          <div class="item__properties">
          ${el.color ? `<span> Размер: ${el.color}</span>` : ""}
          ${el.size ? `<span> Размер: ${el.size}</span>` : ""}
          </div>
          <div class="item__sortingCenter">
          <p>Коледино WB</p>
          <p>${el.sortingCenter}</p>
          </div>
            </div>
    </div>
          <button>Добавить в корзину</button>
    <div>
          <span class="item__price">${el.newPrice}</span>
          <span class="item__price">${el.oldPrice}</span>
          </div>
        </li>
        `;
    });

    const html = `
    <input type='checkbox' class="item__checkboxAll" id='checkAll>
    <label for='checkAll'>Выбрать все</label>
        <ul class='products__list'>
        ${htmlCatalog}
        </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
