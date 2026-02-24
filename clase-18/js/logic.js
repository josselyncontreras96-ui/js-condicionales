export function filterByQuery(products, query) {
  return products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterByOffers(products) {
  return products.filter(p => p.oferta === true);
}