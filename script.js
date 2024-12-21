let carrito = [];

function agregarAlCarrito(nombreProducto, precio) {
    carrito.push({ nombre: nombreProducto, precio: precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let total = 0;
    let productosHtml = '';

    carrito.forEach((producto, index) => {
        productosHtml += `
            <tr>
                <td>${producto.nombre}</td>
                <td>S/ ${producto.precio.toFixed(2)}</td>
            </tr>
        `;
        total += producto.precio;
    });


    document.getElementById('productos-en-carrito').innerHTML = productosHtml;
    document.getElementById('total-carrito').innerText = total.toFixed(2);
}


function eliminarUltimoProducto() {
    if (carrito.length > 0) {
        carrito.pop(); 
        actualizarCarrito();
    } else {
        alert('El carrito está vacío, no hay productos para eliminar.');
    }
}


document.querySelector('form').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (!nombre || !correo || !mensaje) {
        alert('Por favor, complete todos los campos');
        event.preventDefault(); 
    } else {
        alert('¡Mensaje enviado con éxito!');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const productos = [
    { nombre: 'Mix de frutos secos', categoria: 'frutos-secos', precio: 25.00 },
    { nombre: 'Chips de plátano', categoria: 'chips', precio: 18.00 },
    { nombre: 'Granola artesanal', categoria: 'granola', precio: 22.00 },
    { nombre: 'Quinua', categoria: 'granos', precio: 20.00 },
    { nombre: 'Arroz integral', categoria: 'granos', precio: 15.00 },
    { nombre: 'Chía', categoria: 'semillas', precio: 12.00 },
    { nombre: 'Almendras', categoria: 'frutos-secos', precio: 30.00 },
    { nombre: 'Pasas', categoria: 'frutos-secos', precio: 10.00 },
    { nombre: 'Arándanos deshidratados', categoria: 'frutos-secos', precio: 28.00 }
];

function filtrarProductos(categoria) {
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

function mostrarProductos(productos) {
    let html = '';
    productos.forEach(producto => {
        html += `<div><h5>${producto.nombre}</h5><p>Precio: S/ ${producto.precio.toFixed(2)}</p></div>`;
    });
    document.getElementById('productos').innerHTML = html;
}
