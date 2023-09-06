class Products {
  render() {
    let htmlCatalog = "";

    basket?.forEach(
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
        availability,
      }) => {
        htmlCatalog += `
          <li key='${id}' class="products__item">
            <div class="item">
              <div style='display: flex; justify-content:center; gap: 12px'>
                <div class='item__checkbox_container'>
                <input type='checkbox' name='check' class="item__checkbox" onclick='isCheck(${id})' id='check${id}'/>
                <label for='check${id}'></label>
                </div>
                 <div 
                 style='
                 background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url(${img}) 100% / cover no-repeat, lightgray 50% / cover no-repeat;
                 '
                 class="item__img"></div>
              </div>
              <div class="item__description">
                <span class="item__name">${name}</span>
                <div class="item__properties">
                  ${color ? `<span>Цвет: ${color}</span>` : ""}
                  ${size ? `<span>Размер: ${size}</span>` : ""}
                </div>
                <div class="item__sortingCenter">
                  <p>Коледино WB</p>
                  <p>${sortingCenter}</p>
                </div>
              </div>
            </div>
            <div class="countainer__counter_price">
<div style='display:flex; flex-direction:column; gap:8px'>
              <div class='counter' data-counter>
                <button class="counter__btn" onclick='decrement(${id})'>−</button>
                <div class="counter__input" id='${id}'>${cart}</div>
                <button class="counter__btn" onclick='increment(${id})'>+</button>
              </div>
              ${
                availability - cart < 5
                  ? `<p class='countainer__counter_availability'>
                   Осталось ${availability - cart} шт.</p>`
                  : ""
              }
              <div class='btn_lovely_remove'>
              <button class='heart'></button>
              <button class='trash'></button>
              </div>
              </div>
              <div class='item__price'>
                <div style='display: flex; align-items: baseline; position: relative;
                top: -4px;'>
                  ${countPrice(newPrice, cart)}
                  <h4>&nbsp;сом</h4>
                </div>
                  <div class="item__oldPrice_container">
                  <div class='item__oldPrice_line'></div>
                  <p class="item__oldPrice">${oldPrice * cart} сом</p>
              </div>
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
isChecked();
