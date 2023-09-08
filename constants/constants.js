const CATALOG = [
  {
    id: "el1",
    name: "Футболка UZcotton мужская",
    img: "img/catalog/UZcotton.png",
    oldPrice: 1051,
    newPrice: 522,
    cart: 1,
    availability: 2,
    color: "белый",
    size: 56,
    sortingCenter: "OOO Вайлдберриз",
    checked: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 2,
      },
      {
        data: "7-8",
        count: 1,
      },
    ],
  },
  {
    id: "el2",
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    img: "img/catalog/case.png",
    oldPrice: 2300047,
    newPrice: 2100047,
    cart: 200,
    availability: 250,
    color: "прозрачный",
    size: "",
    sortingCenter: "OOO Мегапрофстиль",
    OGRN: "ОГРН: 5167746237148",
    adress:
      "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    checked: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 184,
      },
      {
        data: "7-8",
        count: 16,
      },
    ],
  },
  {
    id: "el3",
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
    img: "img/catalog/pencil.png",
    oldPrice: 950,
    newPrice: 494,
    cart: 1,
    availability: 2,
    color: "",
    size: "",
    sortingCenter: "OOO Вайлдберриз",
    checked: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 2,
      },
      {
        data: "7-8",
        count: 0,
      },
    ],
  },
];

const ADRESS = [
  {
    id: "adr1",
    name: "Бишкек, улица Табышалиева, 57",
    checked: true,
  },
  {
    id: "adr2",
    name: "Бишкек, улица Жукеева-Пудовкина, 77/1",
    checked: false,
  },
  {
    id: "adr3",
    name: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
    checked: false,
  },
];

const DELIVERY = [
  {
    id: "del1",
    name: "в пункт выдачи",
    checked: true,
  },
  {
    id: "del2",
    name: "курьером",
    checked: false,
  },
];

const CARD = [
  {
    id: "card1",
    name: "1234 56•• •••• 1234",
    img: "img/icons/mir.svg",
    checked: true,
    data: "01/30",
  },
  {
    id: "card2",
    name: "1234 56•• •••• 1234",
    img: "img/icons/visa.svg",
    checked: false,
    data: "01/30",
  },
  {
    id: "card3",
    name: "1234 56•• •••• 1234",
    img: "img/icons/mastercard.svg",
    checked: false,
    data: "01/30",
  },
  {
    id: "card4",
    name: "1234 56•• •••• 1234",
    img: "img/icons/maestro.svg",
    checked: false,
    data: "01/30",
  },
];
