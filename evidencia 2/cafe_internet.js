let tiempo_de_uso = 0; 
let tiempo_restante = 0;
const costoPorHora = 10;
let intervalo;
let ticket_generado = false;
let costo_total = 0;
let contador_computadora = 1; 

function Sesion() {
    const numero_computadora = "PC-" + contador_computadora++;
    const nombre_usuario = document.getElementById('nombre-usuario').value;

    if (!esValido(nombre_usuario)) {
        alert("Por favor, use solo letras en el nombre de usuario.");
        return;
    }

    if (!nombre_usuario) {
        alert("Por favor completa todos los campos.");
        return;
    }

    document.getElementById('numero-computadora').value = numero_computadora;

    const horas = parseInt(prompt("¿Cuántas horas desea agregar al iniciar sesión?"), 10);
    if (isNaN(horas) || horas < 1) {
        alert("Por favor, ingrese un número válido de horas.");
        return;
    }

    document.getElementById('nombre-usuario').value = '';

    const ipComputadora = asignarDireccionIP(nombre_usuario);

    tiempo_restante = horas * 3600; 
    tiempo_de_uso = tiempo_restante; 
    costo_total += calcularCostoConDescuento(horas);
    document.getElementById('tiempo-uso').innerText = formatTiempo(tiempo_de_uso); 

    console.log("Iniciando sesión con los siguientes datos:");
    console.log("Número de Computadora:", numero_computadora);
    console.log("Dirección IP:", ipComputadora);
    console.log("Nombre de Usuario:", nombreUsuario);
    console.log(`Tiempo de uso configurado: ${horas} horas.`);

    generarTicket(numero_computadora, ipComputadora, nombre_usuario);

    iniciarContador();
}

function esValido(input) {
    const regex = /^[a-zA-Z]+$/; 
    return regex.test(input);
}

function iniciarContador() {
    intervalo = setInterval(() => {
        if (tiempo_restante > 0) {
            tiempo_restante--;
            actualizarTiempo();
        } else {
            clearInterval(intervalo); 
            alert("Tu tiempo finalizo.");
            console.log("Sesión finalizada, tiempo agotado.");
        }
    }, 1000); 
}

function actualizarTiempo() {
    document.getElementById('tiempo-uso').innerText = formatTiempo(tiempo_restante); 
}

function formatTiempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}

function generarTicket(numeroComputadora, ipComputadora, nombreUsuario) {
    const ticketDiv = document.getElementById('ticket');
    const ticket = document.createElement('div');

    ticket.innerHTML = `
        <p><strong>Computadora:</strong> ${numeroComputadora}</p>
        <p><strong>Dirección IP:</strong> ${ipComputadora}</p>
        <p><strong>Usuario:</strong> ${nombreUsuario}</p>
        <p><strong>Tiempo de Uso:</strong> <span id="tiempo-uso-ticket">${formatTiempo(tiempoUso)}</span></p>
        <p><strong>Costo Total:</strong> $<span id="costo-actual-ticket">${costoTotal.toFixed(2)}</span></p>
        <p><strong>Costo por Hora:</strong> $<span id="costo-por-hora">${costoPorHora.toFixed(2)}</span></p>
        <button onclick="agregarTiempoAlTicket()">Agregar Tiempo</button>
        <button onclick="finalizarSesion()">Finalizar Sesión</button>
        <hr>
    `;
    ticketDiv.appendChild(ticket);
    ticket_generado = true; 
}

function agregarTiempoAlTicket() {
    const horas = parseInt(prompt("¿Cuántas horas desea agregar?"), 10);
    if (isNaN(horas) || horas < 1) {
        alert("Ingresa un número válido de horas.");
        return;
    }

    tiempo_restante += horas * 3600; 
    tiempo_de_uso += horas * 3600; 
    costo_total += calcularCostoConDescuento(horas); 

    actualizarTiempo(); 
    const costoActualElemento = document.getElementById('costo-actual-ticket');
    costoActualElemento.innerText = costo_total.toFixed(2); 
    const tiempoUsoElemento = document.getElementById('tiempo-uso-ticket');
    tiempoUsoElemento.innerText = formatTiempo(tiempo_de_uso); 

    console.log(`${horas} horas agregadas. Tiempo total: ${tiempoUso / 3600} horas.`);
}

function calcular_costo_de_descuento(horas) {
    let costo = horas * costoPorHora;
    
    if (horas === 2) {
        costo *= 0.85; 
    }
    return costo;
}

function finalizar_sesion() {
    clearInterval(intervalo); 
    limpiar_ticket(); 
    console.log("Sesión finalizada");
}

function limpiar_ticket() {
    document.getElementById('ticket').innerHTML = ''; 
    ticket_generado = false; 
    tiempo_de_uso = 0; 
    tiempo_restante = 0; 
    costo_total = 0; 
    document.getElementById('tiempo-uso').innerText = "0:00:00"; 
    document.getElementById('costo-actual').innerText = "0.00"; 
    clearInterval(intervalo); 
    console.log("Ticket borrado y cronómetro reiniciado.");
}

function asignar_direccionIP(nombreUsuario) {
    const hash = Array.from(nombreUsuario).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const ultimoOcteto = (hash % 254) + 1; 
    return `192.168.6.${ultimoOcteto}`;
}

window.onload = () => {
    document.getElementById('ip-computadora').value = asignar_direccionIP("UsuarioEjemplo"); 
};
