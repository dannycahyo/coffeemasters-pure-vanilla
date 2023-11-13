import { API } from "./API.js";

export async function loadMenuData() {
  const data = await API.fetchMenu();
  app.store.menu = data;
}

export async function getProductById(id) {
  if (app.store.menu == null) {
    await loadMenuData();
  }
  for (let menu of app.store.menu) {
    for (let product of menu.products) {
      if (product.id == id) {
        return product;
      }
    }
  }
  return null;
}
