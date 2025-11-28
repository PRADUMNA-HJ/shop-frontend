// ======================================================
//  HARD CODED PRODUCTS (LOCAL)
// ======================================================
const products = [
  { name: "Wireless Headphones", price: 2999, img: "https://www.belkin.com/...png" },
  { name: "Smart Watch", price: 6999, img: "https://imoostore.in/...webp" },
  { name: "Bluetooth Speaker", price: 1499, img: "https://encrypted-tbn0..." },
  { name: "DSLR Camera(Nikon)", price: 81500, img: "https://encrypted-tbn0..." },
  { name: "monitor", price: 12798, img: "https://p1-ofp.static.pub/...png" },
  { name: "Iphone 17 Pro", price: 12798, img: "https://encrypted-tbn1..." },
  { name: "Bottle", price: 899, img: "https://www.milton.in/...jpg" },
  { name: "Table", price: 18000, img: "https://encrypted-tbn0..." },
  { name: "cricket bat", price: 30000, img: "https://encrypted-tbn0..." },
  { name: "Gaming Keyboard RGB", price: 2499, img: "https://m.media-amazon.com/..." },
  { name: "Wireless Mouse", price: 899, img: "https://m.media-amazon.com/..." },
  { name: "4K Smart LED TV", price: 45999, img: "https://encrypted-tbn0..." },
  { name: "Portable Power Bank", price: 1599, img: "https://encrypted-tbn0..." },
  { name: "Laptop Backpack", price: 1299, img: "https://encrypted-tbn0..." },
  { name: "Wireless Earbuds", price: 1999, img: "https://instamart-media..." },
  { name: "Gaming Chair", price: 8999, img: "https://encrypted-tbn0..." },
  { name: "VR", price: 35499, img: "https://images-cdn.ubuy.co.in/...jpg" },
  { name: "Fitness Dumbbells Set", price: 1599, img: "https://www.lifelongindia..." },
  { name: "Electric Kettle", price: 999, img: "https://encrypted-tbn0..." }
];

// ======================================================
//  BACKEND PRODUCTS
// ======================================================
let backendProducts = [];

// ======================================================
//  RENDER FUNCTIONS (LOCAL + BACKEND)
// ======================================================

// Render Hardcoded Limited (Home Page)
function renderProductsLimited(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  products.slice(0, limit).forEach((p, i) => {
    container.innerHTML += productCardHTML(p, i, "local");
  });
}

// Render Hardcoded All (Products Page)
function renderProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  products.forEach((p, i) => {
    container.innerHTML += productCardHTML(p, i, "local");
  });
}

// Render Backend Products (Append only)
function renderBackendProducts(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = limit ? backendProducts.slice(0, limit) : backendProducts;

  list.forEach((p, i) => {
    const globalIndex = backendProducts.indexOf(p);
    container.innerHTML += backendProductCardHTML(p, globalIndex);
  });
}

// ======================================================
//  PRODUCT CARD TEMPLATES
// ======================================================

function productCardHTML(p, index, type) {
  return `
    <div class="col-md-4">
      <div class="card product-card">
        <img src="${p.img}" class="product-img card-img-top">
        <div class="card-body">
          <h5>${p.name}</h5>
          <p class="text-success fw-bold">₹ ${p.price}</p>
          <button class="btn btn-primary w-100" onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function backendProductCardHTML(p, index) {
  return `
    <div class="col-md-4">
      <div class="card product-card">
        <img src="${p.image}" class="product-img card-img-top" style="height:200px;object-fit:cover">
        <div class="card-body">
          <h5>${p.name}</h5>
          <p class="text-success fw-bold">₹ ${p.price}</p>
          <button class="btn btn-primary w-100" onclick="addBackendToCart(${index})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ======================================================
//  CALL INITIAL RENDER
// ======================================================

renderProductsLimited("productContainer", 3);
renderProducts("allProducts");

// ======================================================
//  CART SYSTEM (LOCAL + BACKEND)
// ======================================================

// Local add
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  let existing = cart.find(item => item.name === products[id].name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...products[id], quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Backend add
function addBackendToCart(index) {
  const product = backendProducts[index];
  if (!product) return alert("Product not found.");

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  let existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      img: product.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Render Cart
function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartDiv = document.getElementById("cartItems");
  if (!cartDiv) return;

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartDiv.innerHTML += `
      <div class="cart-item">
        <div class="d-flex justify-content-between">
          <div>
            <div class="cart-name">${item.name}</div>
            <div class="cart-price">₹ ${item.price} × ${item.quantity}</div>
          </div>
          <div class="d-flex gap-2">
            <button class="qty-btn" onclick="decreaseQty(${index})">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="increaseQty(${index})">+</button>
          </div>
        </div>
      </div>
    `;
  });

  if (document.getElementById("cartTotal"))
    document.getElementById("cartTotal").innerText = total;
}

if (location.pathname.includes("cart.html")) renderCart();

// Qty changes
function increaseQty(i) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[i].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function decreaseQty(i) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart[i].quantity > 1) cart[i].quantity--;
  else cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ======================================================
//  SIGNUP + LOGIN + LOGOUT + DASHBOARD
// ======================================================

if (document.getElementById("signupForm")) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = name.value, email = email.value;
    localStorage.setItem("user", JSON.stringify({ name, email }));
    location.href = "dashboard.html";
  });
}

if (document.getElementById("loginForm")) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = loginEmail.value;
    localStorage.setItem("user", JSON.stringify({ name: "User", email }));
    location.href = "dashboard.html";
  });
}

if (location.pathname.includes("dashboard.html")) {
  let u = JSON.parse(localStorage.getItem("user"));
  if (!u) location.href = "login.html";
  userName.innerText = u.name;
  userEmail.innerText = u.email;
}

function logout() {
  localStorage.removeItem("user");
  location.href = "index.html";
}

// ======================================================
//  ORDERS SYSTEM
// ======================================================

function placeOrder() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (cart.length === 0) return alert("Cart is empty!");

  let orders = JSON.parse(localStorage.getItem("orders") || "[]");

  cart.forEach(item => {
    orders.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      orderDate: new Date().toISOString()
    });
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("Order placed!");
  location.href = "orders.html";
}

function renderOrders() {
  const box = document.getElementById("orderList");
  if (!box) return;

  let orders = JSON.parse(localStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    box.innerHTML = `<div class="text-center">No Orders Found</div>`;
    return;
  }

  box.innerHTML = `<h5 class="text-success">You have ${orders.length} order(s)</h5>`;

  orders.forEach((order, i) => {
    box.innerHTML += `
      <div class="order-card">
        <div class="order-title">${order.name}</div>
        <div class="order-price">₹${order.price} × ${order.quantity}</div>
        <div class="delivery-tag">Delivery in 6 days</div>
        <button onclick="cancelOrder(${i})" class="order-btn cancel-btn">Cancel</button>
      </div>
    `;
  });
}

function cancelOrder(i) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders.splice(i, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

if (location.pathname.includes("orders.html")) renderOrders();

// ======================================================
//  BACKEND FETCH
// ======================================================

const BASE_URL = "https://shop-backend-ewx9.onrender.com";

fetch(`${BASE_URL}/getProducts`)
  .then(res => res.json())
  .then(data => {
    backendProducts = Array.isArray(data) ? data : [];

    if (document.getElementById("productContainer"))
      renderBackendProducts("productContainer", 3);

    if (document.getElementById("allProducts"))
      renderBackendProducts("allProducts");
  })
  .catch(err => console.error("Backend Error:", err));

function addProduct() {
  const name = pname.value, price = pprice.value, image = pimage.value;

  if (!name || !price || !image) return alert("Fill all fields!");

  fetch(`${BASE_URL}/addProduct`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, image })
  })
    .then(r => r.json())
    .then(msg => alert(msg.message || "Product added"))
    .catch(console.error);
}
