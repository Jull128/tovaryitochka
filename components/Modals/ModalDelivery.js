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
            <span>${name}</span>
        </label>
  `;
  });

  adress.forEach(({ id, name, checked }) => {
    htmlCatalogAdress += `
    <div class="modal__adress_line">
    <label class="modal__adress_label">
       <input class='input__adress' name='checkAdr'  type='radio' id='${id}' />
       <span></span>
    </label>
       <p class='modal__adress_p' >${name}</p>
       <img style="margin: 0 2px" src='img/icons/trashcan.svg'/>
       </div>
  `;
  });

  const html = `
    <div class="modal__card">
    <div>
    <h3>Способ доставки</h3>
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
