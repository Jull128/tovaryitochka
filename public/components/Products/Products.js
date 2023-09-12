class Products {
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
                    <button class="counter__btn-d" onclick='decrement(${id})'>−</button>
                    <div class="counter__input caption-14" id='${id}'>${cart}</div>
                    <button class="counter__btn-i" onclick='increment(${id})'>+</button>
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
                  <button class='heart'></button>
                  <button class='trash'></button>
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
                <button class="counter__btn" onclick='decrement(${id})'>−</button>
                <div class="counter__input caption-400" id='${id}'>${cart}</div>
                <button class="counter__btn" onclick='increment(${id})'>+</button>
              </div>
              ${
                available(availability, cart)
                  ? `<p class='countainer__counter_availability caption'>
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
        <input type='checkbox' onClick="toggle(this)" class="item__checkbox" id='checkAll' />
        <label for='checkAll'></label>
        <p class='caption-16'>Выбрать все</p>
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
