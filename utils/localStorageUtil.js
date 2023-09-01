class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName, CATALOG);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [CATALOG];
  }
}

const localStorageUtil = new LocalStorageUtil();
