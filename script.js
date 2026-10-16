const products = [
    { id: 1, name: "Catan", price: 2999, players: "3 - 4 Players", image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=300" },
    { id: 2, name: "Monopoly", price: 1499, players: "2 - 8 Players", image: "https://images.unsplash.com/photo-1611891487122-207579d67d98?w=300" },
    { id: 3, name: "Chess Set", price: 1999, players: "2 Players", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=300" },
    { id: 4, name: "Ticket to Ride", price: 3499, players: "2 - 5 Players", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300" }
];

let cart = [];

function displayProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = "";
    products.forEach(p => {
        list.innerHTML += `
            <div class="card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <div class="players">👥 ${p.players}</div>
                <div class="price">₹${p.price}</div>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const itemsList = document.getElementById('cart-items');
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('total-price');

    countEl.innerText = cart.length;

    if (cart.length === 0) {
        itemsList.innerHTML = "<li>Your cart is empty.</li>";
        totalEl.innerText = "0";
        return;
    }

    itemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        itemsList.innerHTML += `
            <li>
                ${item.name} (${item.players}) - ₹${item.price}
                <button style="background:red; padding:2px 6px;" onclick="removeFromCart(${index})">X</button>
            </li>
        `;
    });

    totalEl.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully! Total: ₹" + document.getElementById('total-price').innerText);
        cart = [];
        updateCart();
    }
}

displayProducts();