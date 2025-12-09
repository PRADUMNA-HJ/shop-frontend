// ======================================================
//  HARD CODED PRODUCTS (LOCAL)
// ======================================================
const products = [
  {
    name: "Wireless Headphones",
    price: 2999,
    img: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw90915b20/images/hi-res/9/1993cb53ade24b1f_AUD005btBLK_SoundFormAdaptHeadset_Shot1.jpg?sfrm=png"
  },
  {
    name: "Smart Watch",
    price: 6999,
    img: "https://imoostore.in/cdn/shop/files/imoo_Z1_Kids_Smart_Watch_-_Bamboo_Green.webp?v=1762514348&width=600"
  },
  {
    name: "Bluetooth Speaker",
    price: 1499,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s"
  },
  {
    name: "DSLR Camera(Nikon)",
    price: 81500,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQu3TkWQoKp3yzJcib_DZQ0xwFmZ4kNmrXNQ&s"
  },
  {
    name: "monitor",
    price: 12798,
    img: "https://p1-ofp.static.pub/medias/26982916441_T2440_202502101101211739169275078.png?width=400&height=400"
  },
  {
    name: "Iphone 17 Pro",
    price: 12798,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlg5HQ9QfKWS2yD_0dtc4_wW6-INweVAnDKXEmHLonultgo-a76qW_9kDJ4LVch3RaoYbgHTTXmRvkgrhlo9xE95h6m7HeA67W4C6S0wpg0oNfZdJZXl1n0Lg1IiScvul53yc&usqp=CAc"
  },
  {
    name: "Bottle",
    price: 899,
    img: "https://www.milton.in/cdn/shop/files/breeze_750_blue.jpg?v=1736934801&width=1040"
  },
  {
    name: "Table",
    price: 18000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-vY8iNyzduP-Gw_YRdJpxjvdjbjV6113bg&s"
  },
  {
    name: "cricket bat",
    price: 30000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8x_8JWIUOvAz6mhJ6m0WlPVfH65eOjAzJwA&s"
  },
  {
    name: "Gaming Keyboard RGB",
    price: 2499,
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Wireless Mouse",
    price: 899,
    img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "4K Smart LED TV",
    price: 45999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElaLEl29A4d1lR_N57p6bYl_tWChrbU2xgA&s"
  },
  {
    name: "Portable Power Bank",
    price: 1599,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvKrPAH5tzBXsRce7yIFkBD-qm-o75-oINA&s"
  },
  {
    name: "Laptop Backpack",
    price: 1299,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZhyZ41old2OtN1LaKe_D4EVhZ_ns6k5-jg&s"
  },
  {
    name: "Wireless Earbuds",
    price: 1999,
    img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/8/1/6825f5ff-e528-4b5a-85d9-72952babf307_LHSZ5CF0QK.png"
  },
  {
    name: "Gaming Chair",
    price: 8999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOhp3KPUWu-D4b_Bhd8IJ1DdXwjOQ8y29kw&s"
  },
  {
    name: "VR ",
    price: 35499,
    img: "https://images-cdn.ubuy.co.in/64c44c12c0ff597fab77f0a1-oculus-quest-64gb-vr-headset.jpg"
  },
  {
    name: "Fitness Dumbbells Set",
    price: 1599,
    img: "https://www.lifelongindiaonline.com/cdn/shop/files/1_88ab00b6-9166-493b-9775-2d90ac286dba.jpg?v=1752144854"
  },
  {
    name: "Electric Kettle",
    price: 999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BI_9UfxeUGDMuPDfALfDNfzXfVgDFc8TBA&s"
  }
];


// ======================================================
//  BACKEND PRODUCTS
// ======================================================
let backendProducts = [];

// ======================================================
//  RENDER FUNCTIONS (LOCAL + BACKEND)
// ======================================================

// ======================================================

// Render Hardcoded Limited (Home Page)
function renderProductsLimited(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
container.innerHTML = "";
  products.slice(0, limit).forEach((p, i) => {
    container.innerHTML += productCardHTML(p, i, "local");
  });
}

// Render Hardcoded All (Products Page)
function renderProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
container.innerHTML = "";
  products.forEach((p, i) => {
    container.innerHTML += productCardHTML(p, i, "local");
  });
}

// Render Backend Products (Append only)
function renderBackendProducts(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
container.innerHTML = "";
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
  if (location.pathname.includes("cart.html")) renderCart();
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
      price: Number(product.price),
      img: product.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  if (location.pathname.includes("cart.html")) renderCart();
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
    total += Number(item.price) * Number(item.quantity);

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
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!cart[i]) return;
  cart[i].quantity = (cart[i].quantity || 0) + 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function decreaseQty(i) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!cart[i]) return;
  if ((cart[i].quantity || 0) > 1) cart[i].quantity--;
  else cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ======================================================
//  SIGNUP + LOGIN + LOGOUT + DASHBOARD
// ======================================================

/* SIGNUP - safe element lookup */
/* SIGNUP - post to backend */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("name")?.value || "";
    const emailVal = document.getElementById("email")?.value || "";
    const pass = document.getElementById("password")?.value || "";
    const cpass = document.getElementById("confirmPassword")?.value || "";
    const msgEl = document.getElementById("signupMsg");

    if (pass !== cpass) {
      if (msgEl) msgEl.innerText = "Passwords do not match!";
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/addUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameVal, email: emailVal, password: pass })
      });
      const data = await res.json();
      if (res.ok && !data.error) {
        localStorage.setItem("user", JSON.stringify({ name: nameVal, email: emailVal }));
        window.location.href = "dashboard.html";
      } else {
        if (msgEl) msgEl.innerText = data.message || data.error || "Signup failed";
      }
    } catch (err) {
      if (msgEl) msgEl.innerText = "Network error";
      console.error(err);
    }
  });
}

/* LOGIN - post to backend */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailVal = document.getElementById("loginEmail")?.value || "";
    const passVal = document.getElementById("loginPassword")?.value || "";
    const msgEl = document.getElementById("loginMsg");

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailVal, password: passVal })
      });
      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify({ name: user.name, email: user.email }));
        window.location.href = "dashboard.html";
      } else {
        const data = await res.json();
        if (msgEl) msgEl.innerText = data.error || "Invalid credentials";
      }
    } catch (err) {
      if (msgEl) msgEl.innerText = "Network error";
      console.error(err);
    }
  });
}

/* DASHBOARD - safe DOM updates */
if (location.pathname.includes("dashboard.html")) {
  const u = JSON.parse(localStorage.getItem("user") || "null");
  if (!u) {
    location.href = "login.html";
  } else {
    const userNameEl = document.getElementById("userName");
    const userEmailEl = document.getElementById("userEmail");
    if (userNameEl) userNameEl.innerText = u.name;
    if (userEmailEl) userEmailEl.innerText = u.email;
  }
}

function logout() {
  localStorage.removeItem("user");
  location.href = "index.html";
}

// ======================================================
//  ORDERS SYSTEM
// ======================================================

function placeOrder() {
  // Check if user is logged in
  let user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user) {
    alert("Please login before placing an order!");
    window.location.href = "login.html";
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders") || "[]");

  cart.forEach(item => {
    orders.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
      orderDate: new Date().toISOString()
    });
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("Order Placed Successfully!");
  window.location.href = "orders.html";
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
        <div class="mt-2">
          <button onclick="cancelOrder(${i})" class="order-btn cancel-btn">Cancel</button>
          <button onclick="refundOrder(${i})" class="order-btn refund-btn">Refund</button>
          <button onclick="exchangeOrder(${i})" class="order-btn exchange-btn">Exchange</button>
        </div>
      </div>
    `;
  });
}

function cancelOrder(i) {
  let orders = JSON.parse(localStorage.getItem("orders") || "[]");
  if (!orders[i]) return;
  orders.splice(i, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

if (location.pathname.includes("orders.html")) renderOrders();

// =======================
// Add missing helpers for refund/exchange
// =======================
function refundOrder(index) {
  alert("Refund initiated! Amount will be returned in 3–5 days.");
}

function exchangeOrder(index) {
  alert("Exchange request submitted!");
}

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
  const name = document.getElementById("pname")?.value;
  const price = document.getElementById("pprice")?.value;
  const image = document.getElementById("pimage")?.value;

  if (!name || !price || !image) {
    alert("Please fill all fields!");
    return;
  }

  fetch(`${BASE_URL}/addProduct`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, image })
  })
    .then(res => res.json())
    .then(result => {
      alert(result.message || "Product added!");
    })
    .catch(err => console.error(err));
}

// Export handlers to window only if they exist (safe)
if (typeof addToCart === "function") window.addToCart = addToCart;
if (typeof addBackendToCart === "function") window.addBackendToCart = addBackendToCart;
if (typeof increaseQty === "function") window.increaseQty = increaseQty;
if (typeof decreaseQty === "function") window.decreaseQty = decreaseQty;
if (typeof placeOrder === "function") window.placeOrder = placeOrder;
if (typeof cancelOrder === "function") window.cancelOrder = cancelOrder;
if (typeof refundOrder === "function") window.refundOrder = refundOrder;
if (typeof exchangeOrder === "function") window.exchangeOrder = exchangeOrder;
if (typeof logout === "function") window.logout = logout;
if (typeof addProduct === "function") window.addProduct = addProduct;