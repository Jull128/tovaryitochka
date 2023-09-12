class ProductsInactive {
  render() {
    let htmlCatalog = "";

    basket.forEach(({ id, name, img, color, size }) => {
      {
        mediaQuery.matches
          ? (htmlCatalog += `
        <li key='${id}' class="productsInactive__item">

          <div class='list-item__section'>
            <div class="line"></div>
            <div class='list-item__wrap'>
              <div class="list-item__img">
              <img src="${img}" class="productsInactive__item_img" />
                  ${size ? `<span class="size caption-14">${size}</span>` : ""}
              </div>
                <div class="productsInactive__item_description">
                  <span class="item__name caption-14">${name}</span>
                      ${
                        color
                          ? `<span class="caption">Цвет: ${color}</span>`
                          : ""
                      }
                </div>
            </div>
            <div class='list-item__wrap'>           
              <div class='list-item__bottom'>
                <div class='btn_lovely_remove'>
                <button class='heart'></button>
                <button class='trash'></button>
                </div>
              </div>
            </div>
          </div>
        </li>`)
          : (htmlCatalog += `
            <li key='${id}' class="productsInactive__item">
                <div class="item">
                    <div style='display: flex; justify-content:center; gap: 12px'>
                        <img src="${img}" class="productsInactive__item_img" />
                    </div>
                    <div class="productsInactive__item_description caption-400">
                        <span class="item__name">${name}</span>
                        <div class="item__properties">
                            ${
                              color
                                ? `<span class='caption'>Цвет: ${color}</span>`
                                : ""
                            }
                            ${
                              size
                                ? `<span class='caption'>Размер: ${size}</span>`
                                : ""
                            }
                        </div>
                    </div>
                </div>
                <div class="container__counter_price">
                    <div style='display:flex; flex-direction:column; gap:8px; margin-left: 44px;'>
                        <div class='btn_lovely_remove '>
                            <button class='heart'></button>
                            <button class='trash'></button>
                        </div>
                    </div>
                </div>
          </li>
          `);
      }
    });

    const html = `
        <div class='productsInactive__title'>
          <p class='caption-600'>Отсутствуют · 3 товара</p>
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
