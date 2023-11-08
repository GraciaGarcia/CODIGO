// Definir una variable global para el carrito
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    carrito.
    car
push({ producto, precio });
    total += precio;

    
    total += precio
// Actualizar la lista de productos en el carrito
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");

    carritoLista.innerHTML = 'carrito.html';
    carrito.forEach(item => {
        
       
const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        carritoLista.appendChild(li);
    });

    carritoTotal.textContent = total;
}