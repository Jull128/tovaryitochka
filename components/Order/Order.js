class Order {
  render() {
    let htmlOrder = `
        <div class='order'>
            <div class='order__section'>
                <div class='order__total'>
                    <h2>Итого</h2>
                    <h2 id='order__price'></h2>
                </div>
                <div class='order__total'>
                    <p id='order__products'></p>
                    <p id='order__oldPrice'></p>
                </div>
                <div class='order__total'>
                    <p>Скидка</p>
                    <p id='order__discount'></p>
                </div>
                <div class='order__total'>
                    <p>Доставка</p>
                    <p>Бесплатно</p>
                </div>
            </div>
            <div class='order__section_delivery'>
                <div class='order__delivery_place'>
                    <div class='order__delivery_edit_title'>
                        <h3>Доставка <span id='deliverychoose'></span></h3>
                        <button class='order__delivery_edit' onclick='openModal()'></button>
                    </div>
                    <p name='adresschoose'></p>
                    <span class="data-shipping-text">5-8 фев</span>
                </div>
                <div class='order__delivery_info'>
                    <img src='img/icons/price_shipping.svg' alt='' />
                    <div class="delivery-info3">
                        <div class="free-shipping">
                            <div class="refund-info">
                            Обратная доставка товаров на склад при отказе —

                                    <span class="free-shipping-text">бесплатно</span>

                            </div>
                        </div>

                    </div>
                </div>
                <div class='order__card'>
                    <div class='order__card_edit_title'>
                        <h3>Оплата картой</h3>
                        <button class='order__delivery_edit' onclick='openModalCard()'></button>
                    </div>
                    <p id='cardchoose' name='cardchoose' class='order__cardChoose'></p>
                    <div class='payment-container'>
                    <div class='payment-method-container'>
                    <div class='item__checkbox_container'>
                      <input type='checkbox' onchange="TotalPrice()" id="checkcard" class='item__checkbox' />
                      <label for='checkcard'></label>
                      </div>
                      <p  class='payment-description'>Списать оплату сразу</p>
                    </div>
                    <p class='payment-option-text'>Спишем оплату с карты при получении</p>
                  </div>
                </div>
            </div>
            <div class='order__section'>
            <button id="order_button" class='order_button'>Заказать</button>
            <p class="order__oferta-access">Соглашаюсь с <span>правилами пользования торговой площадкой</span> и <span>возврата</span> </p>
            </div>
        </div>
          `;

    ROOT_ORDER.innerHTML = htmlOrder;
    isDeliveryChoose();
    isAdressChoose();
    isCardChoose();
    isCardChooseDel();
    TotalPrice();
    TotalProducts();
    TotalOldPrice();
    TotalDiscount();
  }
}

const orderBasket = new Order();
orderBasket.render();

function setOrder() {
  const check = document.getElementById("checkbox_payment");
  const order = document.getElementById("order_button");

  if (check.checked) {
    order.innerHTML = "Оплатить";
  }
}
