/* ================================
   SCROLL A PRODUCTOS
================================ */
function scrollToProductos() {
    document.querySelector("#productos").scrollIntoView({
        behavior: "smooth"
    });
}

/* ================================
   VARIABLES DEL CARRITO
================================ */
let cart = [];

const cartBtn = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart");
const overlay = document.getElementById("overlay");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

/* ================================
   ABRIR CARRITO + ACTIVAR OVERLAY
================================ */
cartBtn.addEventListener("click", () => {
    cartMenu.classList.add("active");
    overlay.classList.add("active");
});

/* ================================
   CERRAR CARRITO
================================ */
function cerrarCarrito() {
    cartMenu.classList.remove("active");
    overlay.classList.remove("active");
}

/* ================================
   BOTONES DE "AGREGAR"
================================ */
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const price = parseFloat(btn.getAttribute("data-price"));

        cart.push({ name, price });
        updateCart();
    });
});

/* ================================
   ACTUALIZAR CARRITO VISUALMENTE
================================ */
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;

        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

/* ================================
   VACIAR CARRITO
================================ */
function vaciarCarrito() {
    cart = [];
    updateCart();
}

/* ================================
   ENVIAR PEDIDO POR WHATSAPP
================================ */
function enviarWhatsApp() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! Quiero hacer un pedido:%0A%0A";

    cart.forEach(item => {
        mensaje += `• ${item.name} - $${item.price.toFixed(2)}%0A`;
    });

    mensaje += `%0ATotal: $${cartTotal.textContent}%0A%0A¿Está disponible?`;

    window.open(
        `https://wa.me/50372682523?text=${mensaje}`,
        "_blank"
    );
}
