import { API } from "./services/API";
import { Router } from "./services/Router";
import Store from "./services/Store.js";
import { loadMenuData } from "./services/Menu";

window.app = {};
app.store = Store;
app.router = Router;

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
