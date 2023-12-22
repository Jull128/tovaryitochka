class Products {
  constructor() {
    // Регистрация слушателя события
    mediaQuery.addEventListener("change", () => this.render());
  }

  render() {
    let htmlCatalog = "";
    const available = (availability, cart) => {
      if (availability - cart < 5) {
        return true;
      }
    };

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
        OGRN,
        adress,
      }) => {
        console.log(id);
        mediaQuery.matches
          ? (htmlCatalog += `
          <li key='${id}' class="products__item">

            <div class='list-item__section'>
              <div class="line"></div>
              <div class='list-item__wrap'>
                <div class="list-item__img">
                  <div class='item__checkbox_container'>
                    <input type='checkbox' name='check' class="item__checkbox" onclick='isCheck(${id})' id='check${id}'/>
                    <label for='check${id}'></label>
                  </div>
                  <div 
                    style='
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url(${img}) 100% / cover no-repeat, lightgray 50% / cover no-repeat;
                    ' class="item__img">
                  </div>
                    ${
                      size ? `<span class="size caption-14">${size}</span>` : ""
                    }
                </div>
                <div>
                  <div class="item-price">
                    ${countPrice(newPrice, cart)}
                      <div class='item__oldPrice_line'>
                        <p class="item__oldPrice caption">${Math.round(
                          oldPrice * cart
                        ).toLocaleString("ru")} сом</p>
                      </div>
                  </div>
                  <div class="item__description">
                    <span class="item__name caption-14">${name}</span>
                        ${
                          color
                            ? `<span class="caption">Цвет: ${color}</span>`
                            : ""
                        }
                      <p class="item-color_sort caption">Коледино WB</p>
                  </div>
                </div>
              </div>
              <div class='list-item__wrap'>           
                <div class="container__counter_price">
                  <div style='display:flex; flex-direction:column; gap:8px;'>
                    <div class='counter' data-counter>
                    <button class="counter__btn_d" onclick='decrement(${id})'>−</button>
                    <div class="counter__input caption-14" id='${id}'>${cart}</div>
                    <button class="counter__btn_i" onclick='increment(${id})'>+</button>
                  </div>
                </div>
                <div class='list-item__bottom'>
                  ${
                    availability - cart < 5
                      ? `<p class='countainer__counter_availability caption'>
                      Осталось ${availability - cart} шт.</p>`
                      : ""
                  }
                  <div class='btn_lovely_remove'>
                  <button class='heart' id='favor${id}' onclick='addToFavorite(${id})'></button>
                  <button class='trash' onclick='removeFromCart("${id}")'></button>
                  </div>
                </div>
              </div>
            </div>
          </li>`)
          : (htmlCatalog += `
          <li key='${id}' class="products__item">
            <div class="item">
              <div style='display: flex; justify-content:center; gap: 12px;'>
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
                <span class="item__name caption-400">${name}</span>
                ${
                  color || size
                    ? `
                <div class="item__properties">
                  ${color ? `<span class="caption">Цвет: ${color}</span>` : ""}
                  ${size ? `<span class="caption">Размер: ${size}</span>` : ""}
                </div>`
                    : ""
                }
                <div class="item__sortingCenter">
                  <p class="caption">Коледино WB</p>
                    <div class="info_about_sortingcenter"> 
                      <p class="caption">${sortingCenter}</p>
                      <div class="item__sortingCenter_icon">  
                        <div class="coupontooltip">
                          <div class="tooltip_container">
                            <h5 >${sortingCenter}</h5>
                            <p class="caption">${OGRN}</p>
                            <p class="caption">${adress}</p> 
                            </div>
                        </div>  
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="container__counter_price">
<div style='display:flex; flex-direction:column; gap:8px;'>
              <div class='counter' data-counter>
                <button class="counter__btn_d ${
                  cart === 1 ? "count_disabled" : ""
                }" onclick='decrement(${id})'>−</button>
                <div class="counter__input caption-400" id='${id}'>${cart}</div>
                <button class="counter__btn_i ${
                  availability - cart === 0 ? "count_disabled" : ""
                }" onclick='increment(${id})'>+</button>
              </div>
              ${
                available(availability, cart)
                  ? `<p class='countainer__counter_availability caption'>
                   Осталось ${availability - cart} шт.</p>`
                  : ""
              }
              <div class='btn_lovely_remove'>
              <button class='heart' name="heart" id='favor${id}' onclick='addToFavorite(${id})'></button>
              <button class='trash' onclick='removeFromCart("${id}")'></button>
              </div>
              </div>
              <div class='item__price'>
                <div style='display: flex; align-items: baseline; position: relative;
                top: -4px;'>
                  ${countPrice(newPrice, cart)}
                  <h4>&nbsp;сом</h4>
                </div>
                  <div class="item__oldPrice_container">
                  <div class='item__oldPrice_line'>
                    <p class="item__oldPrice caption">${Math.round(
                      oldPrice * cart
                    ).toLocaleString("ru")} сом</p>                        
                      <div class="coupontooltipOldprice">
                        <div class="tooltip_container">
                          <div class="tooltip_line caption" ><p style='color: #A0A0A4'>Скидка ${Math.round(
                            ((oldPrice * 0.9 - newPrice) / (oldPrice * 0.9)) *
                              100
                          )}%</p><p>−${Math.round(
              oldPrice * 0.9 - newPrice
            ).toLocaleString("ru")} сом</p>
                          </div>
                        <div class="tooltip_line caption"><p style='color: #A0A0A4'>Скидка покупателя 10%</p><p>−${Math.round(
                          oldPrice * 0.1
                        ).toLocaleString("ru")} сом</p></div>
                        </div>
                      </div>
                  </div>  
                  </div>
              </div>
            </div>
            </div>
        </li>
        `);
      }
    );

    const html = `
    ${
      mediaQuery.matches
        ? `<h2 class="main__title">Корзина</h2>`
        : `<h1 class="main__title">Корзина</h1>`
    }

      <div class='item__checkboxAll_container'>
        <div class="item__checkboxAll_header">
          <input type='checkbox' onClick="toggle(this)" class="item__checkbox" id='checkAll' />
          <label for='checkAll'></label>
          <p class='caption-16' style="
          margin-top: -1px;
      ">Выбрать все</p>
        </div>
        <button class="item__accordeon" onclick="hideList()"><img id='accordeon' src="../img/icons/accord.png" /></button>
      </div>
      ${mediaQuery.matches ? "" : `<div class="line"></div>`}
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
isFavorite();

function hideList() {
  let list = document.querySelector(".products__list");
  let arrow = document.getElementById("accordeon");
  if (list.style.display === "none") {
    list.style.display = "flex";
    arrow.src = "../img/icons/accord.png";
    hideListAndCloseCount();
  } else {
    list.style.display = "none";
    arrow.src = "../img/icons/accordDown.png";
    hideListAndShowCount();
  }
}

let quantityAllProducts = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id } = x;
        let search = basket.find((y) => y.id === id) || [];
        return search.cart;
      })
      .reduce((x, y) => x + y, 0);

    let price = basket
      .map((x) => {
        let { id } = x;
        let search = basket.find((y) => y.id === id) || [];
        return search.newPrice;
      })
      .reduce((x, y) => x + y, 0);

    // склонение окончаний
    let declOfNum = (n) => {
      n = Math.abs(amount) % 100;
      let n1 = n % 10;
      if (n > 10 && n < 20) {
        return "товаров";
      }
      if (n1 > 1 && n1 < 5) {
        return "товара";
      }
      if (n1 == 1) {
        return "товар";
      }
      return "товаров";
    };

    return `${amount} ${declOfNum(amount)} · ${Math.round(
      amount * price
    ).toLocaleString("ru")} сом`;
  }
};

function hideListAndShowCount() {
  let container = document.querySelector(".item__checkboxAll_header");

  // Получаем количество товаров, здесь предполагается, что у вас уже есть эта информация
  let itemCount = quantityAllProducts();

  // Очищаем контейнер и устанавливаем новое содержимое
  container.innerHTML = '<p class="caption-600">' + itemCount + "</p>";
}

function hideListAndCloseCount() {
  let container = document.querySelector(".item__checkboxAll_header");
  // Очищаем контейнер и устанавливаем новое содержимое
  container.innerHTML = `<input type='checkbox' onClick="toggle(this)" class="item__checkbox" id='checkAll' />
  <label for='checkAll'></label>
  <p class='caption-16' style="
  margin-top: -1px;
">Выбрать все</p>`;
}
