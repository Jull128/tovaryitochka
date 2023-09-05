class Delivery {
  render() {
    let htmlCatalog = `
    <div class='delivery__container'>
<div class='delivery__section'>
    <div class='delivery__block'>
        <div class='delivery__title'>
        <h2>Способ доставки </h2>
        <h4 onclick='openModal()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
        </div>
        <div class='delivery__info'>
            <div class='delivery__info_line'>
                <p class='delivery__info_label'>Пункт выдачи</p>
                <p class='delivery__info_label'>Стоимость доставки</p>
                <p class='delivery__info_label'>5—6 февраля</p>
                <p class='delivery__info_label'>7—8 февраля</p>
            </div>
            <div class='delivery__info_line'>
                <p name='adresschoose'></p>
                <p>Бесплатно</p>
                <p></p>
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
        <h2>Способ оплаты</h2>
        <div name='cardchoose'></div>
        <p class="caption" style='color: var(--system-gray, #A0A0A4);'>Спишем оплату с карты при получении</p>
    </div>
</div>
</div>
            `;

    ROOT_DELIVERY.innerHTML = htmlCatalog;
    isAdressChoose();
  }
}

const deliveryPage = new Delivery();
deliveryPage.render();
