
// Inicializa el contador de carrito al cargar la página
updateCartCount();
function addToCart(product) {
    // Obtiene el carrito actual del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex > -1) {
        // Si ya existe, incrementa la cantidad
        cart[existingProductIndex].quantity += 1;
    } else {
        // Si no existe, lo agrega al carrito con cantidad 1
        cart.push({ ...product, quantity: 1 });
    }

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} agregado al carrito`);
}
