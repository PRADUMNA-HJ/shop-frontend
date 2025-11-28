// ----------------------- PRELOADED PRODUCTS ----------------------------
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

// ----------------------- LIMITED PRODUCTS FOR HOMEPAGE ----------------------------
function renderProductsLimited(containerId, limit) {
  if (!document.getElementById(containerId)) return;

  const container = document.getElementById(containerId);
  container.innerHTML = "";

  products.slice(0, limit).forEach((p, i) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card product-card">
          <img src="${p.img}" class="product-img card-img-top">
          <div class="card-body">
            <h5 class="fw-bold">${p.name}</h5>
            <p class="text-success fw-bold">₹ ${p.price}</p>
            <button class="btn btn-primary w-100" onclick="addToCart(${i})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// ----------------------- RENDER ALL PRODUCTS (PRODUCTS PAGE) ----------------------------
function renderProducts(containerId) {
  if (!document.getElementById(containerId)) return;

  const container = document.getElementById(containerId);
  container.innerHTML = "";

  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card product-card">
          <img src="${p.img}" class="product-img card-img-top">
          <div class="card-body">
            <h5 class="fw-bold">${p.name}</h5>
            <p class="text-success fw-bold">₹ ${p.price}</p>
            <button class="btn btn-primary w-100" onclick="addToCart(${i})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// ----------------------- CALL RENDER FUNCTIONS ----------------------------

// Homepage → show only first 3 products
renderProductsLimited("productContainer", 3);

// Products page → show all products
renderProducts("allProducts");

// ----------------------- CART SYSTEM ----------------------------
function addToCart(id) {
  // read cart (or empty array)
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // find existing product by name
  let existing = cart.find(item => item.name === products[id].name);

  if (existing) {
    // if found, ensure quantity exists and increment
    existing.quantity = (existing.quantity || 0) + 1;
  } else {
    // new item: copy product and set quantity = 1
    cart.push({ ...products[id], quantity: 1 });
  }

  // save back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
 
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
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <div class="cart-name">${item.name}</div>
            <div class="cart-price">₹ ${item.price} x ${item.quantity}</div>
          </div>

          <div class="d-flex align-items-center gap-2">
            <button class="qty-btn" onclick="decreaseQty(${index})">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="increaseQty(${index})">+</button>
          </div>

        </div>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText = total;
}



// ----------------------- SIGNUP ----------------------------
if (document.getElementById("signupForm")) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirmPassword").value;

    if (pass !== cpass) {
      document.getElementById("signupMsg").innerText = "Passwords do not match!";
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email }));
    window.location.href = "dashboard.html";
  });
}

// ----------------------- LOGIN ----------------------------
if (document.getElementById("loginForm")) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    localStorage.setItem("user", JSON.stringify({ name: "User", email }));

    window.location.href = "dashboard.html";
  });
}

// ----------------------- DASHBOARD ----------------------------
if (window.location.pathname.includes("dashboard.html")) {
  let u = JSON.parse(localStorage.getItem("user"));

  if (!u) window.location.href = "login.html";

  document.getElementById("userName").innerText = u.name;
  document.getElementById("userEmail").innerText = u.email;
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}


// ----------- add or minus in cart --------------------
function increaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function decreaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    // If quantity reaches 1 and user presses -
    cart.splice(index, 1); // REMOVE ITEM
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

if (window.location.pathname.includes("cart.html")) {
  renderCart();
}
//---------------------------orders ----------------------------------------
function renderOrders() {
  let orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const box = document.getElementById("orderList");

  if (!box) return;

  box.innerHTML = "";

  // ------------------ NO ORDERS -------------------
  if (orders.length === 0) {
    box.innerHTML = `
  <div class="no-orders-box text-center">
    <div class="no-orders-text">No Orders Found</div>
    <div class="no-orders-sub">You have not placed any orders yet</div>
  </div>
`;

    return;
  }

  // ------------------ ORDER COUNT -------------------
  box.innerHTML = `<h5 class="mb-3 text-success">You have ${orders.length} order(s)</h5>`;

  // ------------------ EACH ORDER BOX -------------------
  orders.forEach((order, index) => {
    const orderDate = new Date(order.orderDate);
    const today = new Date();
    const daysSinceOrder = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));

    let actionButtons = "";

    // Cancel option (0–2 days)
    if (daysSinceOrder < 3) {
      actionButtons = `
        <button class="order-btn cancel-btn" onclick="cancelOrder(${index})">Cancel Order</button>

      `;
    }

    // Refund + Exchange (3+ days)
    if (daysSinceOrder >= 3) {
      actionButtons = `
     <button class="order-btn refund-btn" onclick="refundOrder(${index})">Refund</button>
<button class="order-btn exchange-btn" onclick="exchangeOrder(${index})">Exchange</button>

      `;
    }
      box.innerHTML += `
  <div class="order-card">
    <div class="order-title">${order.name}</div>

    <div class="order-price">₹${order.price} × ${order.quantity}</div>

    <div class="delivery-tag">Delivery in 6 days</div>

    <div class="mt-3">
      ${actionButtons}
    </div>
  </div>
`;

    
  });
}

function cancelOrder(index) {
  let orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

function refundOrder(index) {
  alert("Refund initiated! Amount will be returned in 3–5 days.");
}

function exchangeOrder(index) {
  alert("Exchange request submitted!");
}

function exchangeOrder(index) {
  alert("Exchange request submitted!");
}

function placeOrder() {
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

if (window.location.pathname.includes("orders.html")) {
  renderOrders();
}
// ------------- placing order ---------------
