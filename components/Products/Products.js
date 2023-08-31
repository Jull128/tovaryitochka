class Products {
  render() {
    let htmlCatalog = CATALOG.map((el) => {
      return `
      <li key=${el.id} class="products__item">
      <div class="item">
      <img src="${el.img}" class="item__img" />
        <div class="item__description">
      <span class="item__name">${el.name}</span>
      <span class="item__name">Цвет: ${el.color}</span>
      <span class="item__name">Размер: ${el.size}</span>
      <span class="item__name">Коледино WB 
      ${el.sortingCenter}</span>
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
        <ul class='products__list'>
        ${htmlCatalog}
        </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
