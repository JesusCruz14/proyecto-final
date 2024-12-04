
let reservas = [];

function reserva(nombre, fecha) {
    const nuevaReserva = {
        nombre,
        fecha,
        estado: 'reservado'
    };

    const existeReserva = reservas.some(reserva => reserva.fecha == fecha && reserva.estado == 'reservado');
    if (existeReserva) {
        alert(`Ya existe una reserva para el ${fecha}.`);
        return;
    }

    reservas.push(nuevaReserva);
    alert(`Se ingresó correctamente la reserva de ${nombre} para el ${fecha}.`);
}

function listarReservas() {
    const reservasDiv = document.getElementById('reservas');
    if (reservas.length === 0) {
        reservasDiv.textContent = "No hay reservas.";
        return;
    }
    reservasDiv.textContent = reservas.map(reserva => `Nombre: ${reserva.nombre}, Fecha: ${reserva.fecha}, Estado: ${reserva.estado}`).join('\n');
}

function cancelarReserva() {
    const fecha = document.getElementById('fechaCancelar').value;
    const indiceReserva = reservas.findIndex(reserva => reserva.fecha === fecha && reserva.estado === 'reservado');
    if (indiceReserva === -1) {
        alert(`No se encontró una reserva para el ${fecha}.`);
        return;
    }

    reservas[indiceReserva].estado = 'cancelado';
    alert(`Se canceló la reserva para el ${fecha}.`);
}

function hacerReserva() {
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    
    if (nombre === '' || fecha === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }
    
    reserva(nombre, fecha);
}
