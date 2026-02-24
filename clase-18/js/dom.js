export function getFilters() {
  const input = document.querySelector("#search");
  const checkbox = document.querySelector("#onlyOffers");

  return {
    query: input.value.trim(),
    onlyOffers: checkbox.checked
  };
}

export function renderProducts(products) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  products.forEach(p => {
    const li = document.createElement("li");
    li.textContent =
      `${p.title} - $${p.price} ${p.oferta ? "(Oferta)" : ""}`;
    list.appendChild(li);
  });
}

export function renderCounter(products) {
  const counter = document.querySelector("#counter");
  counter.textContent = `Resultados: ${products.length}`;
}