const modalEl = document.querySelector(".modal");

function openModal() {
  modalEl.classList.add("modal--show");
  document.body.classList.add("stop-scrolling");

  let htmlCatalogAdress = "";
  let htmlCatalogDelivery = "";

  delivery.forEach(({ id, name, checked }) => {
    htmlCatalogDelivery += `
        <label class="checkbox-btn">
            <input type="radio" name='checkDel' id='${id}' class='input__delivery'>
            <span class='caption-700'>${name}</span>
        </label>
  `;
  });

  adress.forEach(({ id, name, checked }) => {
    htmlCatalogAdress += mediaQuery.matches
      ? `
    <div class="modal__adress_line">
    <label class="modal__adress_label" for="${id}">
       <input class='input__adress' name='checkAdr' type='radio' id='${id}' />
       <span></span>
    </label>
<div class="modal__adress_mobile">
       <p class='modal__adress_p caption-400'>${name}</p>
       <p class='caption' style="margin-top: 4px;margin-bottom: 8px;"><img style='margin-right: 1px;' src="img/icons/star_fill.svg"/>&nbsp;4.99&nbsp; Пункт выдачи </p>
       </div>
       <div class="trash_container">
       <button class='trash' onclick='removeAdress(${id})' ></button>
       </div>
       </div>
  `
      : `
    <div class="modal__adress_line">
    <label class="modal__adress_label" for="${id}">
       <input class='input__adress' name='checkAdr' type='radio' id='${id}' />
       <span></span>
    </label>
       <p class='modal__adress_p caption-400'>${name}</p>
       <div class="trash_container">
       <button class='trash' onclick='removeAdress(${id})' ></button>
       </div>
       </div>
  `;
  });

  const html = `
    <div class="modal__card">
    <div>
    <div class="modal__title">
      <h3>Способ доставки</h3>
      <button class="close_button" onclick='closeModal()'></button>
      </div>
      <div class='modal__delivery_checkbox_container'>
        ${htmlCatalogDelivery}
      </div>
    </div>
    <div class="modal__adress_checkbox_container">
        <p class="signature">Мои адреса</p>
        ${htmlCatalogAdress}
        </div>
        <div class='modal__button_container'> 
        <button class='modal_button' onclick='save()'>Выбрать</button>
        </div>
    </div>

`;

  modalEl.innerHTML = html;
  isCheckedDel();
  isCheckedAdr();
  // const btnClose = document.querySelector(".modal__button-close");
  // btnClose.addEventListener("click", () => closeModal());
}
