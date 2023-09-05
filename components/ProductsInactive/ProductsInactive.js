class ProductsInactive {
  render() {
    let htmlCatalog = "";

    basket.forEach(({ id, name, img, color, size }) => {
      htmlCatalog += `
            <li key='${id}' class="products__item">
                <div class="item">
                    <div style='display: flex; justify-content:center; gap: 12px'>
                        <img src="${img}" class="productsInactive__item_img" />
                    </div>
                    <div class="productsInactive__item_description">
                        <span class="item__name">${name}</span>
                        <div class="item__properties">
                            ${color ? `<span>Цвет: ${color}</span>` : ""}
                            ${size ? `<span>Размер: ${size}</span>` : ""}
                        </div>
                    </div>
                </div>
                <div class="countainer__counter_price">
                    <div style='display:flex; flex-direction:column; gap:8px; margin-left: 44px;'>
                        <div class='btn_lovely_remove '>
                            <button class='heart'></button>
                            <button class='trash'></button>
                        </div>
                    </div>
                </div>
          </li>
          `;
    });

    const html = `
        <div class=''>
          <p>Отсутствуют · 3 товара</p>
        </div>
        <div class="line"></div>
          <ul class='productsInactive__list'>
          ${htmlCatalog}
          </ul>
      `;

    ROOT_PRODUCTSINACTIVE.innerHTML = html;
  }
}

const productsInactivePage = new ProductsInactive();
productsInactivePage.render();
