export function renderProducts(products, listElement) {
  if (!Array.isArray(products)) return;

  listElement.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.title;
    listElement.appendChild(li);
  });
}

export function setStatus(statusElement, message) {
  statusElement.textContent = message;
}