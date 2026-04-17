// ================= DATA =================
let defaultProducts = [
    // ===== ÁO QUẠT =====
    {id:1,name:"Áo quạt điều hòa Nhật Bản V1",price:850000,image:"images/ao1.jpg",desc:"Mát nhanh",detail:"Pin 12h"},
    {id:2,name:"Áo quạt điều hòa V2",price:900000,image:"images/ao2.jpg",desc:"2 quạt mạnh",detail:"Pin 14h"},
    {id:3,name:"Áo quạt chống nước",price:880000,image:"images/ao3.jpg",desc:"Ngoài trời",detail:"Chống nước"},
    {id:4,name:"Áo quạt công trường",price:870000,image:"images/ao4.jpg",desc:"Vải dày",detail:"Bền bỉ"},
    {id:5,name:"Áo quạt mini",price:650000,image:"images/ao5.jpg",desc:"Nhỏ gọn",detail:"Pin 8h"},
    {id:6,name:"Áo quạt cao cấp Pro",price:1200000,image:"images/ao6.jpg",desc:"Siêu mát",detail:"Pin 16h"},
    {id:7,name:"Áo quạt YAMAKO V1",price:950000,image:"images/ao7.jpg",desc:"Thời trang",detail:"Pin 12h"},
    {id:8,name:"Áo quạt YAMAKO V2",price:1100000,image:"images/ao8.jpg",desc:"Nâng cấp",detail:"Pin 15h"},
    {id:9,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao9.jpg",desc:"VENTUS PRIME",detail:"Pin 20.000 MAH"},
    {id:10,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao10.jpg",desc:"FROS AIR",detail:"Pin 20.000 MAH"},
    {id:11,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao11.jpg",desc:"ELITE COOL",detail:"Pin 20.000 MAH"},
    {id:12,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao12.jpg",desc:"ROYAL AIR",detail:"Pin 20.000 MAH"},
    {id:13,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao13.jpg",desc:"AIRLUX",detail:"Pin 20.000 MAH"},
    {id:14,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao14.jpg",desc:"PRETIGE",detail:"Pin 20.000 MAH"},
    {id:15,name:"Bộ áo điều hoà HERO LIGHT",price:1190000,image:"images/ao15.jpg",desc:"AEROFIT",detail:"Pin 20.000 MAH"},
    {id:16,name:"Bộ áo điều hoà",price:1190000,image:"images/ao16.jpg",desc:"Nhỏ gọn",detail:"Dễ mang"},
    {id:17,name:"Bộ áo điều hoà SUPER PRO",price:1399000,image:"images/ao17.jpg",desc:"Ghi trắng",detail:"Pin 30.000 MAH"},
    {id:18,name:"Bộ áo điều hoà SUPER PRO",price:1399000,image:"images/ao18.jpg",desc:"Xanh đậm",detail:"Pin 30.000 MAH"},
    {id:19,name:"Bộ áo điều hoà SUPER COOL",price:1399000,image:"images/ao19.jpg",desc:"Xanh ngọc",detail:"Pin 20.000 MAH"},
    {id:20,name:"Bộ áo điều hoà SUPER COOL",price:1399000,image:"images/ao20.jpg",desc:"Xanh rêu",detail:"Pin 20.000 MAH"},

    // ===== ÁO SƯỞI =====
    {id:21,name:"Áo sưởi YAMAKO 7",price:1190000,image:"images/ao21.jpg",desc:"Giữ nhiệt",detail:"Pin 8h"},
    {id:22,name:"Áo sưởi Ghile YAMAKO",price:990000,image:"images/ao22.jpg",desc:"Nhiều vùng nhiệt",detail:"Cao cấp"},
    {id:23,name:"Áo sưởi Gentle xanh",price:1190000,image:"images/ao23.jpg",desc:"Êm",detail:"Nhẹ"},
    {id:24,name:"Áo sưởi Gentle đen",price:1190000,image:"images/ao24.jpg",desc:"Ấm",detail:"Bền"},
    {id:25,name:"Áo sưởi Y5",price:1686000,image:"images/ao25.jpg",desc:"Pin khủng",detail:"10.000 MAH"},
    {id:26,name:"Pin áo sưởi",price:369000,image:"images/pin.jpg",desc:"Phụ kiện",detail:"Tương thích"},
    {id:27,name:"Áo sưởi Y9",price:1686000,image:"images/ao26.jpg",desc:"9 vùng nhiệt",detail:"Cao cấp"},
    {id:28,name:"Áo sưởi chống nước",price:1686000,image:"images/ao27.jpg",desc:"Ngoài trời",detail:"Chống mưa"}
];

// 👉 LUÔN LOAD DATA MỚI
localStorage.setItem("products", JSON.stringify(defaultProducts));
let products = JSON.parse(localStorage.getItem("products")) || [];

// ================= RENDER =================
function renderProducts(list = products){
    const el = document.getElementById("productList");
    if(!el) return;

    el.innerHTML = list.map(p => `
        <div class="card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()}đ</p>
            <button onclick="viewDetail(${p.id})">Xem</button>
            <button onclick="addToCart(${p.id})">Thêm</button>
        </div>
    `).join("");
}

// ================= FILTER =================
function filterAoQuat(){
    renderProducts(products.filter(p => p.name.toLowerCase().includes("quạt")));
}
function filterAoSuoi(){
    renderProducts(products.filter(p => p.name.toLowerCase().includes("sưởi")));
}

// ================= SEARCH =================
function searchProduct(){
    let key = document.getElementById("searchInput").value.toLowerCase();
    let result = products.filter(p =>
        p.name.toLowerCase().includes(key)
    );
    renderProducts(result);
}

// ================= DETAIL =================
function viewDetail(id){
    let product = products.find(p => p.id === id);
    localStorage.setItem("detailProduct", JSON.stringify(product));
    window.location.href = "chitiet.html";
}

function loadDetail(){
    let p = JSON.parse(localStorage.getItem("detailProduct"));
    let el = document.getElementById("detail");

    if(!p || !el) return;

    el.innerHTML = `
<div class="detail-page">

    <!-- LEFT -->
    <div class="detail-left">
        <img src="${p.image}" class="main-img">
    </div>

    <!-- RIGHT -->
    <div class="detail-right">
        <h1 class="product-title">${p.name}</h1>

        <div class="price-box">
            <span class="new-price">${p.price.toLocaleString()}đ</span>
            <span class="old-price">${(p.price * 1.3).toLocaleString()}đ</span>
            <span class="sale">-30%</span>
        </div>

        <div class="promo-box">
            <h4>🎁 KHUYẾN MÃI</h4>
            <ul>
                <li>Nhập mã: PINKSHOP</li>
                <li>Đổi trả 30 ngày</li>
                <li>Bảo hành 12 tháng</li>
                <li>Miễn phí ship</li>
            </ul>
        </div>

        <div class="size-box">
            <p>Size:</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
        </div>

        <div class="qty-box">
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </div>

        <button class="btn-cart" onclick="addToCart(${p.id})">
            🛒 Thêm vào giỏ
        </button>

        <button class="btn-buy">
            ⚡ Mua ngay
        </button>

        <div class="desc">
            <p>${p.desc}</p>
            <p>${p.detail}</p>
        </div>

    </div>
</div>
`;
}

// ================= CART =================
function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id){
    let cart = getCart();
    let product = products.find(p => p.id === id);

    let exist = cart.find(i => i.id === id);

    if(exist){
        exist.quantity++;
    }else{
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);
    alert("🛒 Đã thêm vào giỏ!");
}

// ===== TĂNG =====
function increase(id){
    let cart = getCart();
    cart.forEach(i => { if(i.id === id) i.quantity++; });
    saveCart(cart);
    location.reload();
}

// ===== GIẢM =====
function decrease(id){
    let cart = getCart();
    cart = cart.map(i=>{
        if(i.id === id){
            i.quantity--;
        }
        return i;
    }).filter(i => i.quantity > 0);

    saveCart(cart);
    location.reload();
}

// ===== XOÁ =====
function removeItem(id){
    let cart = getCart().filter(i => i.id !== id);
    saveCart(cart);
    location.reload();
}

// ================= CHECKOUT =================
function checkout(){
    let cart = getCart();

    if(cart.length === 0){
        alert("Giỏ hàng trống!");
        return;
    }

    let name = prompt("Tên:");
    let phone = prompt("SĐT:");
    let address = prompt("Địa chỉ:");

    if(!name || !phone || !address){
        alert("Nhập đủ!");
        return;
    }

    alert("🎉 Đặt hàng thành công!");
    localStorage.removeItem("cart");
    location.reload();
}

// ================= ADMIN =================
function renderAdmin(){
    const list = document.getElementById("adminList");
    if(!list) return;

    list.innerHTML = products.map(p => `
        <div>
            ${p.name} - ${p.price}
            <button onclick="deleteProduct(${p.id})">Xoá</button>
        </div>
    `).join("");
}

function deleteProduct(id){
    products = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    renderAdmin();
}

// ================= USER =================
function register(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.find(u => u.username === username)){
        alert("Tồn tại!");
        return;
    }

    users.push({username, password, role});
    localStorage.setItem("users", JSON.stringify(users));

    alert("OK");
    window.location.href = "login.html";
}

function login(){
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.username === username && u.password === password);

    if(!user){
        alert("Sai!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if(user.role === "admin"){
        window.location.href = "admin.html";
    } else {
        window.location.href = "index.html";
    }
}

function logout(){
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}

// ================= AUTO =================
window.onload = function(){
    renderProducts();
    loadDetail();
    renderAdmin();
};
function checkout(){
    let cart = getCart();

    if(cart.length === 0){
        alert("Giỏ hàng trống!");
        return;
    }

    let name = prompt("Nhập tên người nhận:");
    let phone = prompt("Nhập số điện thoại:");
    let address = prompt("Nhập địa chỉ:");

    if(!name || !phone || !address){
        alert("Nhập đầy đủ thông tin!");
        return;
    }

    alert(
        "🎉 Đặt hàng thành công!\n\n" +
        "👤 " + name +
        "\n📞 " + phone +
        "\n📍 " + address +
        "\n\nCảm ơn bạn đã mua hàng ❤️"
    );

    localStorage.removeItem("cart"); // xoá giỏ
    renderCart();
}
function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// ===== LƯU GIỎ =====
function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== TĂNG =====
function increase(id){
    let cart = getCart();

    cart.forEach(i=>{
        if(i.id === id){
            i.quantity++;
        }
    });

    saveCart(cart);
    location.reload();
}

// ===== GIẢM =====
function decrease(id){
    let cart = getCart();

    cart.forEach(i=>{
        if(i.id === id){
            i.quantity--;
            if(i.quantity <= 0){
                cart = cart.filter(x => x.id !== id);
            }
        }
    });

    saveCart(cart);
    location.reload();
}

// ===== XOÁ =====
function removeItem(id){
    let cart = getCart();

    cart = cart.filter(i => i.id !== id);

    saveCart(cart);
    location.reload();
}
let currentFilter = "all";
let currentSort = "default";
let currentKeyword = "";

// ===== FILTER + SEARCH + SORT =====
function applyFilter(){
    let list = [...products];

    // FILTER LOẠI
    if(currentFilter === "quat"){
        list = list.filter(p => p.name.toLowerCase().includes("quạt"));
    }
    else if(currentFilter === "suoi"){
        list = list.filter(p => p.name.toLowerCase().includes("sưởi"));
    }

    // SEARCH
    if(currentKeyword){
        list = list.filter(p =>
            p.name.toLowerCase().includes(currentKeyword) ||
            p.desc.toLowerCase().includes(currentKeyword)
        );
    }

    // SORT GIÁ
    if(currentSort === "low"){
        list.sort((a,b)=> a.price - b.price);
    }
    else if(currentSort === "high"){
        list.sort((a,b)=> b.price - a.price);
    }

    renderProducts(list);
}

// ===== CLICK FILTER =====
function filterProduct(type){
    currentFilter = type;
    applyFilter();
}

// ===== SEARCH =====
function searchProduct(){
    currentKeyword = document.getElementById("searchInput").value.toLowerCase();
    applyFilter();
}

// ===== SORT =====
function sortProduct(type){
    currentSort = type;
    applyFilter();
}