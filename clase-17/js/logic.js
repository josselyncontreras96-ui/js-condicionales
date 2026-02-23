export function filterProducts(products, search) {
  if (!search) return products;

  return products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
}