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
                    <h3>Доставка в пункт выдачи</h3>
                    <button class='order__delivery_edit'></button>
                    </div>
                    <p>Бишкек, улица Ахматбека Суюбаеваб 12/1</p>
                    <p>5-8 фев</p>
                </div>
                <div class='order__delivery_info'>
                <img src='img/icons/price_shipping.svg' alt='' />
                <p>Обратная доставка товаров на склад при отказе — бесплатно</p>
                </div>
            </div>
            <div class='order__section'>
                <div></div>
                <div>
                <div></div>
                <p></p>
                </div>
            </div>
            <div class='order__section'>
            <button></button>
            </div>
        </div>
          `;

    ROOT_ORDER.innerHTML = htmlOrder;
  }
}

const orderBasket = new Order();
orderBasket.render();
TotalPrice();
TotalProducts();
TotalOldPrice();
TotalDiscount();
