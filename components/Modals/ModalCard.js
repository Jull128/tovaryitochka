const modalElCard = document.querySelector(".modal");

function openModalCard() {
  modalElCard.classList.add("modal--show");
  document.body.classList.add("stop-scrolling");

  let htmlCatalogCard = "";

  card.forEach(({ id, name, img, checked }) => {
    htmlCatalogCard += `
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
    <div class="modal__card_checkbox_container">
        <p class="signature">Мои адреса</p>
        ${htmlCatalogCard}
        </div>
        <div class='modal__button_container'> 
        <button class='modal_button' onclick='saveCard()'>Выбрать</button>
        </div>
    </div>

`;

  modalElCard.innerHTML = html;
  // const btnClose = document.querySelector(".modal__button-close");
  // btnClose.addEventListener("click", () => closeModal());
}
