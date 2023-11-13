import { Router } from "./services/Router.js";
import Store from "./services/Store.js";
import { loadMenuData } from "./services/Menu.js";

import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { ProductItem } from "./components/ProductItem.js";
import { CartItem } from "./components/CartItem.js";

window.app = {};
app.store = Store;
app.router = Router;

function renderComponents() {
  customElements.define("menu-page", MenuPage);
  customElements.define("details-page", DetailsPage);
  customElements.define("order-page", OrderPage);
  customElements.define("product-item", ProductItem);
  customElements.define("cart-item", CartItem);
}

window.addEventListener("DOMContentLoaded", () => {
  loadMenuData();
  app.router.init();
});

window.addEventListener("appcartchange", () => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});

renderComponents();
