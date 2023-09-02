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
                <input type='checkbox' name='check' class="item__checkbox" id='check${id}'/>
                <label for='check${id}'></label>
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
              <button class="counter__btn" onclick='decrement(${id})'>−</button>
              <div class="counter__input" id='${id}'>${cart}</div>
              <button class="counter__btn" onclick='increment(${id})'>+</button>
            </div>
            <div class='item__price'>
              <p class="item__newPrice">${newPrice} сом</p>
                <div class="item__oldPrice_container">
                <div class='item__oldPrice_line'></div>
                <p class="item__oldPrice">${oldPrice} сом</p>
                
                </div>
            </div>
        </li>
        `;
      }
    );

    const html = `
      <div class='item__checkboxAll_container'>
        <input type='checkbox' onClick="toggle(this)" class="item__checkbox" id='checkAll'/>
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

function toggle(source) {
  checkboxes = document.getElementsByName("check");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}
