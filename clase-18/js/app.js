import { products } from "./products.js";
import { filterByQuery, filterByOffers } from "./logic.js";
import { getFilters, renderProducts } from "./dom.js";

function renderAndFilter() {
  const { query, onlyOffers } = getFilters();

  let filtered = filterByQuery(products, query);

  if (onlyOffers) {
    filtered = filterByOffers(filtered);
  }

  renderProducts(filtered);
}

renderAndFilter();

document.querySelector("#search")
  .addEventListener("keyup", renderAndFilter);

document.querySelector("#onlyOffers")
  .addEventListener("change", renderAndFilter);