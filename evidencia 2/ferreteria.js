let productoSeleccionado = null;
let productosSeleccionados = [];

const Herramientas = [
    { nombre: 'Martillo', origen: 'China', familia: 'Herramientas de Mano', costoUnidad: 5.0, descripcion: 'Martillo', imagen: '/img/martillo.png' },
    { nombre: 'Cinta Metrica', origen: 'Inglaterra', familia: 'Herramientas de Mano', costoUnidad: 4.5, descripcion: 'Cinta Metrica', imagen: '/img/cinta.png' },
    { nombre: 'Destornillador', origen: 'India', familia: 'Herramientas de Mano', costoUnidad: 2.5, descripcion: 'Destornillador Phillips', imagen: '/img/destornillador.png' },
    { nombre: 'Llave Inglesa', origen: 'Japón', familia: 'Herramientas de Mano', costoUnidad: 4.0, descripcion: 'Llave inglesa', imagen: '/img/llave.png' },
    { nombre: 'Nivel', origen: 'Estados Unidos', familia: 'Herramientas de Mano', costoUnidad: 2.0, descripcion: 'Nivel', imagen: '/img/nivel.png' },
    { nombre: 'Pala', origen: 'China', familia: 'Herramientas de Mano', costoUnidad: 3.0, descripcion: 'Pala', imagen: '/img/pala.png' },
    { nombre: 'Pico', origen: 'China', familia: 'Herramientas de Mano', costoUnidad: 5.0, descripcion: 'Pico', imagen: '/img/pico.png' },
    { nombre: 'Sierra', origen: 'Alemania', familia: 'Herramientas de Corte', costoUnidad: 6.5, descripcion: 'Sierra de mano', imagen: '/img/sierra.png' },
    { nombre: 'Taladro', origen: 'Estados Unidos', familia: 'Herramientas Eléctricas', costoUnidad: 50.0, descripcion: 'Taladro eléctrico', imagen: '/img/tal.png' },
    { nombre: 'Caja de Herramientas', origen: 'China', familia: 'Accesorios', costoUnidad: 20.0, descripcion: 'Caja de herramientas', imagen: '/img/caja.png' },
];

const Materiales = [
    { nombre: 'Clavos', origen: 'Mexico', familia: 'Materiales', costoUnidad: 3.0, descripcion: 'Clavos', imagen: '/img/clavo.png' },
    { nombre: 'Tornillos', origen: 'España', familia: 'Materiales', costoUnidad: 4.0, descripcion: 'Tornillos', imagen: '/img/tornillo.png' },
    { nombre: 'Cemento', origen: 'Mexico', familia: 'Materiales', costoUnidad: 10.0, descripcion: 'Cemento', imagen: '/img/cemento.png' },
    { nombre: 'Pintura', origen: 'Italia', familia: 'Materiales', costoUnidad: 15.0, descripcion: 'Pintura', imagen: '/img/pintura.png' },
    { nombre: 'Pegamento', origen: 'EEUU', familia: 'Materiales', costoUnidad: 2.0, descripcion: 'Pegamento instantáneo', imagen: '/img/pegamento.png' },
    { nombre: 'Madera', origen: 'Canadá', familia: 'Materiales', costoUnidad: 20.0, descripcion: 'Tablones de madera', imagen: '/img/tabla.png' },
    { nombre: 'Tubería  PVC', origen: 'Colombia', familia: 'Materiales', costoUnidad: 10.0, descripcion: 'Tubería PVC', imagen: '/img/tuberias.png' },
    { nombre: 'Bloques', origen: 'Mexico', familia: 'Materiales', costoUnidad: 7.0, descripcion: 'Bloques de concreto', imagen: '/img/bloques.png' },
];

function cargar_productos(categoria) {
    const productosGrid = document.getElementById('productos-grid');
    productosGrid.innerHTML = '';

    const productos = categoria === 'herramientas' ? Herramientas : Materiales;

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = crear_producto(producto);
        productosGrid.appendChild(div);
    });
}

function crear_producto(producto) {
    return `
        <div class="producto" onclick="seleccionarProducto('${producto.nombre}', '${producto.descripcion}', '${producto.origen}', ${producto.costoUnidad}, '${producto.familia}')">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.costoUnidad.toFixed(2)}</p>
            <p>${producto.descripcion}</p>
        </div>
    `;
}

function seleccionar_producto(nombre, descripcion, origen, costo, familia) {
    producto_seleccionado = { nombre, descripcion, origen, costo, familia };
    document.getElementById('producto-cantidad').value = 1; 

    document.getElementById('detalle-producto').innerHTML = `
        <h3>${nombre}</h3>
        <p>Descripción: ${descripcion}</p>
        <p>Origen: ${origen}</p>
        <p>Familia: ${familia}</p>
        <p>Precio por unidad: $${costo.toFixed(2)}</p>
    `;
}

function agregar_Ticket() {
    if (!producto_seleccionado) {
        return alert('Selecciona un producto antes de agregarlo al ticket.');
    }

    const cantidad = parseInt(document.getElementById('producto-cantidad').value);
    const tamano = document.getElementById('producto-tamano').value;
    let costoModificado = producto_seleccionado.costo;

    switch(tamano) {
        case 'chico':
            costoModificado *= 0.9; 
            break;
        case 'mediano':
            
            break;
        case 'grande':
            costoModificado *= 1.2;  
            break;
    }

    const total = costoModificado * cantidad;

    const productoExistente = productos_seleccionados.find(p => p.nombre === producto_seleccionado.nombre && p.tamano === tamano);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
        productoExistente.total += total;
    } else {
        productos_seleccionados.push({
            ...producto_seleccionado,
            cantidad,
            total,
            tamano,
            costo: costoModificado
        });
    }

    mostrar_ticket();
}

function mostrar_ticket() {
    const ticketDiv = document.getElementById('ticket');
    ticketDiv.innerHTML = '';

    productos_seleccionados.forEach(producto => {
        ticketDiv.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <p>${producto.cantidad} x ${producto.nombre} (${producto.tamano}) - $${producto.total.toFixed(2)}</p>
            </div>
        `;
    });

    const totalGeneral = productos_seleccionados.reduce((sum, producto) => sum + producto.total, 0);
    ticketDiv.innerHTML += `<strong>Total: $${totalGeneral.toFixed(2)}</strong>`;
}

function comprar() {
    const ticketContent = productos_seleccionados.map(producto => 
        `${producto.cantidad} x ${producto.nombre} (${producto.tamano}) - $${producto.total.toFixed(2)}\nDescripción: ${producto.descripcion}\nOrigen: ${producto.origen}`
    ).join('\n');

    const totalGeneral = productos_seleccionados.reduce((sum, producto) => sum + producto.total, 0);
    const ticketCompleto = ticketContent + `\nTotal: $${totalGeneral.toFixed(2)}`;

    const blob = new Blob([ticketCompleto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ticket_compra.txt';
    link.click();
}

function limpiar_ticket() {
    productos_seleccionados = [];
    document.getElementById('ticket').innerHTML = '';
    alert('Tikect borrado.');
}

cargar_productos('herramientas');
