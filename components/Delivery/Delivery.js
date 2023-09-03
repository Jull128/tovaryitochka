class Delivery {
  render() {
    let htmlCatalog = `
    <div class='delivery__container'>
<div class='delivery__section'>
    <div class='delivery__block'>
        <div class='delivery__line'>
        <p>Способ доставки </p>
        <p>Изменить</p>
        </div>
        <div>
            <div>
                <p>Пункт выдачи</p>
                <p></p>
            </div>
            <div>
                <p>Стоимость доставки</p>
                <p></p>
            </div>
            <div>
                <p>5-6 февраля</p>
                <p></p>
            </div>
            <div>
                <p>7-8 февраля</p>
                <p></p>
            </div>
        </div>
    </div>
    <div>
    <img src='img/icons/price_shipping.svg' alt='' />
    <p>Обратная доставка товаров на склад при отказе — бесплатно</p>
    </div>
</div>
<div class='delivery__section'>
    <div>
        <div>Способ оплаты</div>
        <div></div>
        <p>Спишем оплату с карты при получении</p>
    </div>
</div>
</div>
            `;

    ROOT_DELIVERY.innerHTML = htmlCatalog;
  }
}

const deliveryPage = new Delivery();
deliveryPage.render();
