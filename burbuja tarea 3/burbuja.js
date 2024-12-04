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

function ordenarNumeros() {
    const numeros = [85, 36, 47, 9, 19, 69, 96];
    
    document.getElementById('resultado').innerHTML = `Lista No Ordenada: ${numeros.join(', ')}`;

    setTimeout(() => {
        const numerosOrdenados = Burbuja([...numeros]); // Copia el array para no modificar el original
        document.getElementById('resultado').innerHTML += `<br>Lista Ordenada: ${numerosOrdenados.join(', ')}`;
    }, 1000);
}
