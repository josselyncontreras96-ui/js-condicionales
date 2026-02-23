import { getProducts } from "./api.js";
import { renderProducts, setStatus } from "./dom.js";
import { filterProducts } from "./logic.js";

const load = document.querySelector("#load");
const search = document.querySelector("#search");
const list = document.querySelector("#list");
const status = document.querySelector("#status");

let productscache = [];
const state = {
    products: [],
    filtered: [], 
    error: null,
    laoding: false,
    loaded: false,
}

load.addEventListener("click", async () => {
    try {
        state.loading = true;
        state.error = null
    setStatus(status, "Cargando...");

    state.products = await getProducts();

    state.loaded = true;

    //productscache = state.products;
    renderProducts(state.products, list);
    setStatus(status, "");
    } catch (error) {
        setStatus(status,error.message);
    }
});

search.addEventListener("input", (e) => {
    if (!state.loaded) {
        setStatus(status, "Primero tenes que cargar los productos");
        return;
    }

    const query = e.target.value;
    //const filtered = filterProducts(productscache, query);
    state.filtered = filterProducts(state.products, query);
    renderProducts(state.filtered, list); 
});