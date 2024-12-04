function mostrarBurbuja() {
    document.getElementById('burbujaForm').style.display = 'block';
    document.getElementById('nombresForm').style.display = 'none';
    document.getElementById('calculadoraForm').style.display = 'none';
}

function metodoBurbuja() {
    const tamaño = parseInt(document.getElementById('tamaño').value);
    const datos = document.getElementById('datos').value.split(',').map(num => parseInt(num.trim()));
    const orden = document.getElementById('orden').value;

    if (isNaN(tamaño) || datos.length !== tamaño) {
        alert('Por favor, ingresa un tamaño válido y los datos correspondientes.');
        return;
    }

    for (let i = 0; i < datos.length - 1; i++) {
        for (let j = 0; j < datos.length - 1 - i; j++) {
            if ((orden === 'ascendente' && datos[j] > datos[j + 1]) || 
                (orden === 'descendente' && datos[j] < datos[j + 1])) {
                [datos[j], datos[j + 1]] = [datos[j + 1], datos[j]];
            }
        }
    }

    document.getElementById('resultadoBurbuja').textContent = `Lista ordenada: ${datos.join(', ')}`;
}

function mostrarNombres() {
    document.getElementById('burbujaForm').style.display = 'none';
    document.getElementById('nombresForm').style.display = 'block';
    document.getElementById('calculadoraForm').style.display = 'none';
}

function ordenarNombres() {
    const nombres = [
        document.getElementById('nombre1').value,
        document.getElementById('nombre2').value,
        document.getElementById('nombre3').value,
        document.getElementById('nombre4').value,
        document.getElementById('nombre5').value
    ];

    const nombresOrdenados = nombres.sort();

    let resultado = "Nombres ordenados alfabéticamente:\n";
    nombresOrdenados.forEach(nombre => {
        resultado += `${nombre} - Letras: ${nombre.length}\n`;
    });

    document.getElementById('resultadoNombres').textContent = resultado;
}

function mostrarCalculadora() {
    document.getElementById('burbujaForm').style.display = 'none';
    document.getElementById('nombresForm').style.display = 'none';
    document.getElementById('calculadoraForm').style.display = 'block';
}

function realizarOperacion() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingresa dos números válidos.');
        return;
    }

    let resultado;
    if (operacion === 'suma') {
        resultado = numero1 + numero2;
    } else if (operacion === 'resta') {
        resultado = numero1 - numero2;
    }

    document.getElementById('resultadoCalculadora').textContent = `Resultado: ${resultado}`;
}
