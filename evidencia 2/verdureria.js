function calcularPrecioKilo(costoUnidad) {
    return costoUnidad * 1.5 * 6;
}

const Frutas = [
    { nombre: 'Manzana', origen: 'Arbol', familia: 'Rosáceas', costoUnidad: 1.5, precioKilo: calcularPrecioKilo(1.5), descripcion: 'Manzana Roja', imagen: '/img/manzana.png' },
    { nombre: 'Plátano', origen: 'Planta', familia: 'Musáceas', costoUnidad: 1.4, precioKilo: calcularPrecioKilo(1.4), descripcion: 'Plátano', imagen: '/img/platanos.png' },
    { nombre: 'Naranja', origen: 'Arbol', familia: 'Rutáceas', costoUnidad: 1.0, precioKilo: calcularPrecioKilo(1.0), descripcion: 'Naranja', imagen: '/img/naranja.png' },
    { nombre: 'Fresa', origen: 'Planta', familia: 'Rosáceas', costoUnidad: 2.0, precioKilo: calcularPrecioKilo(2.0), descripcion: 'Fresa', imagen: '/img/fresa.png' },
    { nombre: 'Mango', origen: 'Arbol', familia: 'Anacardiáceas', costoUnidad: 1.8, precioKilo: calcularPrecioKilo(1.8), descripcion: 'Mango Dulce', imagen: '/img/mango.png' },
    { nombre: 'Piña', origen: 'Planta', familia: 'Bromeliáceas', costoUnidad: 2.2, precioKilo: calcularPrecioKilo(2.2), descripcion: 'Piña', imagen: '/img/pina.png' },
    { nombre: 'Aguacate', origen: 'Arbol', familia: 'Lauraceae', costoUnidad: 3.0, precioKilo: calcularPrecioKilo(3.0), descripcion: 'Aguacate', imagen: '/img/aguacate.png' },
    { nombre: 'Cereza Negra', origen: 'Arbol', familia: 'Prunus Avium', costoUnidad: 1.5, precioKilo: calcularPrecioKilo(1.5), descripcion: 'Cereza negra', imagen: '/img/black.png' },
    { nombre: 'Uva', origen: 'Planta', familia: 'Vitáceas', costoUnidad: 2.5, precioKilo: calcularPrecioKilo(2.5), descripcion: 'Uva Verde', imagen: '/img/uva.png' },
    { nombre: 'Papaya', origen: 'Planta', familia: 'Caricáceas', costoUnidad: 1.6, precioKilo: calcularPrecioKilo(1.6), descripcion: 'Papaya', imagen: '/img/papaya.png' },
    { nombre: 'Sandía', origen: 'Planta', familia: 'Cucurbitáceas', costoUnidad: 1.2, precioKilo: calcularPrecioKilo(1.2), descripcion: 'Sandía Fresca', imagen: '/img/sandia.png' },
    { nombre: 'Cereza', origen: 'Arbol', familia: 'Rosáceas', costoUnidad: 3.0, precioKilo: calcularPrecioKilo(3.0), descripcion: 'Cereza Roja', imagen: '/img/cerezas.png' },
    { nombre: 'Melón', origen: 'Planta', familia: 'Cucurbitáceas', costoUnidad: 1.5, precioKilo: calcularPrecioKilo(1.5), descripcion: 'Melón Dulce', imagen: '/img/melon.png' },
    { nombre: 'Durazno', origen: 'Arbol', familia: 'Rosáceas', costoUnidad: 1.7, precioKilo: calcularPrecioKilo(1.7), descripcion: 'Durazno', imagen: '/img/durazno.png' },
    { nombre: 'Limon', origen: 'Arbol', familia: 'Rutaceae', costoUnidad: 1.0, precioKilo: calcularPrecioKilo(1.0), descripcion: 'Limon', imagen: '/img/limon.png' },
];

const Verduras = [
    { nombre: 'Pepino', origen: 'Planta', familia: 'Cucurbitáceas', costoUnidad: 0.9, precioKilo: calcularPrecioKilo(0.9), descripcion: 'Pepino Verde', imagen: '/img/pepino.png' },
    { nombre: 'Cebolla', origen: 'Planta', familia: 'Amaryllidaceae', costoUnidad: 1.2, precioKilo: calcularPrecioKilo(1.2), descripcion: 'Cebello', imagen: '/img/cebolla.png' },
    { nombre: 'Tomate', origen: 'Planta', familia: 'Solanáceas', costoUnidad: 1.2, precioKilo: calcularPrecioKilo(1.2), descripcion: 'Tomate Rojo', imagen: '/img/tomate.png' },
    { nombre: 'Jitomate', origen: 'Planta', familia: 'Solanáceas', costoUnidad: 1.2, precioKilo: calcularPrecioKilo(1.2), descripcion: 'Jitomate', imagen: '/img/jitomate.png' },
    { nombre: 'Zanahoria', origen: 'Tierra', familia: 'Apiáceas', costoUnidad: 1.0, precioKilo: calcularPrecioKilo(1.0), descripcion: 'Zanahoria Fresca', imagen: '/img/zanahoria.png' },
    { nombre: 'Pimiento', origen: 'Planta', familia: 'Solanáceas', costoUnidad: 1.3, precioKilo: calcularPrecioKilo(1.3), descripcion: 'Pimiento Rojo', imagen: '/img/pimiento-rojo.png' },
    { nombre: 'Calabacín', origen: 'Planta', familia: 'Cucurbitáceas', costoUnidad: 1.1, precioKilo: calcularPrecioKilo(1.1), descripcion: 'Calabacín Fresco', imagen: '/img/calabacin.png' },
    { nombre: 'Brócoli', origen: 'Planta', familia: 'Brassicáceas', costoUnidad: 1.5, precioKilo: calcularPrecioKilo(1.5), descripcion: 'Brócoli Fresco', imagen: '/img/brocoli.png' },
    { nombre: 'Papas', origen: 'Planta', familia: 'Solanáceas', costoUnidad: 1.5, precioKilo: calcularPrecioKilo(1.5), descripcion: 'Papas', imagen: '/img/papas.png' },
    
];

let productosSeleccionados = [];

function cargarProductos(categoria) {
    const productosGrid = document.getElementById('productos-grid');
    productosGrid.innerHTML = '';

    const productos = categoria === 'frutas' ? Frutas : Verduras;

    productos.forEach((producto) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="producto" onclick="seleccionarProducto('${producto.nombre}', '${producto.descripcion}', '${producto.origen}', ${producto.costoUnidad}, '${categoria}', ${producto.precioKilo}, '${producto.familia}')">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio por kilo: $${producto.precioKilo.toFixed(2)}</p>
                <p>${producto.descripcion}</p>
            </div>
        `;
        productosGrid.appendChild(div);
    });
}

function seleccionarProducto(nombre, descripcion, origen, costo, tipoCompra, precioKilo, familia) {
    const cantidadSeleccionada = document.querySelector('input[name="cantidad"]:checked');

    if (!cantidadSeleccionada) {
        alert('Selecciona una unidad de medida (unidad o kilo)');
        return;
    }

    const tipoCantidad = cantidadSeleccionada.value; 
    let precioTotal;

    if (tipoCantidad === 'kilo') {
        precioTotal = precioKilo; 
    } else {
        precioTotal = costo; 
    }

    const productoExistente = productosSeleccionados.find((producto) => producto.nombre === nombre && producto.tipoCompra === tipoCantidad);

    if (productoExistente) {
        productoExistente.cantidad += 1;
        productoExistente.precioTotal += precioTotal;
    } else {
        productosSeleccionados.push({
            nombre,
            tipoCompra: tipoCantidad,
            cantidad: 1,
            precioUnidad: precioTotal,
            precioTotal: precioTotal,
            familia: familia,
            origen: origen
        });
    }

    document.getElementById('familia').value = familia;
    document.getElementById('tipo').value = origen;

    mostrarTicket();
}

function mostrarTicket() {
    const ticketDiv = document.getElementById('ticket');
    ticketDiv.innerHTML = '';

    productosSeleccionados.forEach((producto) => {
        ticketDiv.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <p>${producto.cantidad} x ${producto.nombre} (${producto.tipoCompra}) - $${producto.precioTotal.toFixed(2)}</p>
                <button onclick="quitarUnidad('${producto.nombre}', '${producto.tipoCompra}')">Quitar unidad</button>
            </div>
        `;
    });

    const totalGeneral = productosSeleccionados.reduce((sum, producto) => sum + producto.precioTotal, 0);
    ticketDiv.innerHTML += `<strong>Total: $${totalGeneral.toFixed(2)}</strong>`;
}

function quitarUnidad(nombre, tipoCompra) {
    const productoExistente = productosSeleccionados.find(producto => producto.nombre === nombre && producto.tipoCompra === tipoCompra);

    if (!productoExistente) {
        alert("No se encuentra el producto en el ticket.");
        return;
    }

    if (productoExistente.cantidad > 1) {
        productoExistente.cantidad -= 1; 
        const precioPorUnidad = productoExistente.tipoCompra === 'kilo' ? productoExistente.precioUnidad : productoExistente.precioUnidad; 
        productoExistente.precioTotal -= precioPorUnidad;
    } else {
        productosSeleccionados = productosSeleccionados.filter(producto => producto !== productoExistente);
    }

    mostrarTicket(); 
}

function comprar() {
    const ticketContent = productosSeleccionados.map(producto => 
        `${producto.cantidad} x ${producto.nombre} (${producto.tipoCompra}) - $${producto.precioTotal.toFixed(2)}\nFamilia: ${producto.familia}\nOrigen: ${producto.origen}`
    ).join('\n');

    const totalGeneral = productosSeleccionados.reduce((sum, producto) => sum + producto.precioTotal, 0);
    const totalTicket = `Total: $${totalGeneral.toFixed(2)}`;

    const blob = new Blob([ticketContent + '\n' + totalTicket], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function borrar() {
    productosSeleccionados = [];
    document.getElementById('ticket').innerHTML = '';
    document.getElementById('familia').value = '';
    document.getElementById('tipo').value = '';
}

function modificarTicket() {
    const nombreProducto = prompt("Ingresa el nombre del producto que deseas modificar:");
    const productoExistente = productosSeleccionados.find(producto => producto.nombre === nombreProducto);

    if (!productoExistente) {
        alert("Producto no encontrado en el ticket.");
        return;
    }

    const nuevaCantidad = parseInt(prompt("Ingresa la nueva cantidad:"));

    if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
        alert("Cantidad no válida.");
        return;
    }

    const precioPorUnidad = productoExistente.tipoCompra === 'kilo' ? productoExistente.precioUnidad : productoExistente.precioUnidad;
    productoExistente.cantidad = nuevaCantidad;
    productoExistente.precioTotal = nuevaCantidad * precioPorUnidad;

    mostrarTicket(); 
}

cargarProductos('frutas');
