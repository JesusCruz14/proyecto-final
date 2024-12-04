function Burbuja(arreglo) {
    const n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    return arreglo;
}

// Función para generar números aleatorios
function generarNumerosAleatorios(cantidad, rango) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(Math.floor(Math.random() * rango));
    }
    return numeros;
}

document.addEventListener("DOMContentLoaded", () => {
    const numerosAzarDiv = document.getElementById("numeros-azar");
    const numerosOrdenadosDiv = document.getElementById("numeros-ordenados");
    const ordenarBtn = document.getElementById("ordenar-btn");
    const cantidadInput = document.getElementById("cantidad");
    const rangoInput = document.getElementById("rango");

    ordenarBtn.addEventListener("click", () => {
        // Obtener la cantidad y el rango ingresados por el usuario
        const cantidad = parseInt(cantidadInput.value);
        const rango = parseInt(rangoInput.value);

        // Validar la entrada
        if (cantidad <= 0 || rango <= 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }

        // Generar nuevos números aleatorios
        const numeros = generarNumerosAleatorios(cantidad, rango); // Números aleatorios según entrada
        numerosAzarDiv.innerHTML = '<h2>Números Al Azar:</h2>'; // Título para números al azar
        numerosAzarDiv.innerHTML += '<div>' + numeros.map(num => `<div class="numero">${num}</div>`).join('') + '</div>';

        // Limpiar los números ordenados
        numerosOrdenadosDiv.innerHTML = '<h2>Números Ordenados:</h2>'; // Título para números ordenados
        const numerosOrdenados = Burbuja(numeros.slice());
        numerosOrdenadosDiv.innerHTML += '<div>' + numerosOrdenados.map(num => `<div class="numero">${num}</div>`).join('') + '</div>';
    });
});
