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
                <p class='delivery__info_label' style="height: 56px">5—6 февраля</p>
                <p class='delivery__info_label' style="height: 56px">7—8 февраля</p>
            </div>
            <div class='delivery__info_line'>
                <p name='adresschoose'></p>
                <p>Бесплатно</p>
                <div id='5-6' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'></div>
                <div id='7-8' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'></div>
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
    <div class='delivery__title'>
    <h2>Способ оплаты</h2>
    <h4 onclick='openModalCard()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
    </div>
        <div name='cardchoose' style='height: 24px; 
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 16px 0 8px 0
        '></div>
        <p class="caption" style='color: var(--system-gray, #A0A0A4);'>Спишем оплату с карты при получении</p>
    </div>
</div>
<div class='delivery__section'>
    <h2>Получатель</h2>
    <form>
        <div>
            <input placeholder='Имя'>
            <input placeholder='Фамилия' />
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </form>
</div>
</div>
            `;

    ROOT_DELIVERY.innerHTML = htmlCatalog;
    isAdressChoose();
    isCardChoose();
    htmlDeliverytest();
  }
}

const deliveryPage = new Delivery();
deliveryPage.render();
