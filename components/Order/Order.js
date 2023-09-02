class Order {
  render() {
    let htmlOrder = `
        <div class='order'>
            <div class='order__section'>
                <div class='order__total'>
                    <h2>Итого</h2>
                    <h2>2101063 сом</h2>
                </div>
                <div class='order__total'>
                    <p>203 товара</p>
                    <p> 222</p>
                </div>
                <div class='order__total'>
                    <p>Скидка</p>
                    <p></p>
                </div>
                <div class='order__total'>
                    <p>Доставка</p>
                    <p></p>
                </div>
            </div>
            <div class='order__section'>
                <div>
                    <div class='order__total'>
                    <h3>Доставка в пункт выдачи</h3>
                    <button>К</button>
                    </div>
                    <p>Бишкек, улица Ахматбека Суюбаеваб 12/1</p>
                    <p>5-8 фев</p>
                </div>
                <div></div>
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
