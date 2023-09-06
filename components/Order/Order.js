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
                    <p>5-8 фев</p>
                </div>
                <div class='order__delivery_info'>
                    <img src='img/icons/price_shipping.svg' alt='' />
                    <div class="delivery-info3">
                        <div class="free-shipping">
                            <div class="refund-info">
                            Обратная доставка товаров на склад при отказе —
                                <div style="
                                height: 100%;
                                display: flex;
                                flex-direction: column;">
                                    <p class="free-shipping-text">бесплатно</p>
                                    <div class="delivery-info-divider"></div>
                                </div>
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
                      <input type='checkbox' id="checkcard" class='item__checkbox' />
                      <label for='checkcard'></label>
                      </div>
                      <p class='payment-description'>Списать оплату сразу</p>
                    </div>
                    <p class='payment-option-text'>Спишем оплату с карты при получении</p>
                  </div>
                </div>
            </div>
            <div class='order__section'>
            <button class='order_button'>Заказать</button>
            </div>
        </div>
          `;

    ROOT_ORDER.innerHTML = htmlOrder;
    isDeliveryChoose();
    isAdressChoose();
    isCardChoose();
    TotalPrice();
    TotalProducts();
    TotalOldPrice();
    TotalDiscount();
  }
}

const orderBasket = new Order();
orderBasket.render();
