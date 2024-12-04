document.getElementById('option1').addEventListener('click', showOption1);
document.getElementById('option2').addEventListener('click', showOption2);
document.getElementById('option3').addEventListener('click', showOption3);

// Opcion 1
let dataArray = []; 

const zodiacMessages = {
    Aries: "Eres valiente, enérgico y a veces impulsivo. Te gusta liderar y eres competitivo.",
    Tauro: "Eres práctico, leal y amante de la estabilidad. Disfrutas de los placeres sensoriales.",
    Géminis: "Eres adaptable, curioso y comunicativo. Puedes ser un poco impredecible.",
    Cáncer: "Eres emocional, protector y empático. Valoras la familia y la seguridad emocional.",
    Leo: "Eres creativo, carismático y seguro de ti mismo. Te gusta ser el centro de atención.",
    Virgo: "Eres detallista, analítico y organizado. Buscas la perfección y eres muy práctico.",
    Libra: "Eres diplomático, sociable y amante de la armonía. Buscas la belleza y la justicia.",
    Escorpio: "Eres intenso, apasionado y a veces misterioso. Tienes una profunda conexión emocional.",
    Sagitario: "Eres aventurero, optimista y amante de la libertad. Te gusta explorar y aprender.",
    Capricornio: "Eres ambicioso, disciplinado y responsable. Buscas el éxito y la estabilidad.",
    Acuario: "Eres innovador, independiente y humanitario. A menudo piensas de manera diferente y valoras la originalidad.",
    Piscis: "Eres soñador, sensible y creativo. Eres empático y tienes una rica vida interior."
};

function showOption1() {
    document.getElementById('content').innerHTML = `
        <h2>Agregar Datos</h2>
        <form id="dataForm">
            <input type="text" id="name" placeholder="Nombre" required>
            <input type="number" id="age" placeholder="Edad" required>
            <select id="zodiac" required>
                <option value="" disabled selected>Selecciona tu signo zodiacal</option>
                <option value="Aries">Aries</option>
                <option value="Tauro">Tauro</option>
                <option value="Géminis">Géminis</option>
                <option value="Cáncer">Cáncer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Escorpio">Escorpio</option>
                <option value="Sagitario">Sagitario</option>
                <option value="Capricornio">Capricornio</option>
                <option value="Acuario">Acuario</option>
                <option value="Piscis">Piscis</option>
            </select>
            <button type="submit">Agregar</button>
        </form>
        <ul id="dataList"></ul>
        <p id="zodiacMessage"></p>
    `;
    document.getElementById('dataForm').addEventListener('submit', addData);
    displayData();
}

function addData(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const zodiac = document.getElementById('zodiac').value;

    dataArray.push({ name, age, zodiac });
    
    
    document.getElementById('zodiacMessage').textContent = zodiacMessages[zodiac];

    displayData();
    document.getElementById('dataForm').reset();
}

function displayData() {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = '';
    dataArray.forEach((data, index) => {
        const li = document.createElement('li');
        li.textContent = `${data.name}, ${data.age}, ${data.zodiac}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editData(index);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteData(index);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        dataList.appendChild(li);
    });
}

function editData(index) {
    const data = dataArray[index];
    document.getElementById('name').value = data.name;
    document.getElementById('age').value = data.age;
    document.getElementById('zodiac').value = data.zodiac;
    deleteData(index);
}

function deleteData(index) {
    dataArray.splice(index, 1);
    displayData();
}



// Opción 2
let numeros = []; 


function showOption2() {
    document.getElementById('content').innerHTML = `
        <h2>Método Burbuja</h2>
        <input type="text" id="numeroInput" placeholder="Ingresa un número" required>
        <button id="ingresarNumero">Ingresar</button>
        <button id="sortNumbers">Ordenar Números</button>
        <p id="resultado"></p>
    `;
    
    document.getElementById('ingresarNumero').addEventListener('click', ingresarNumero);
    document.getElementById('sortNumbers').addEventListener('click', ordenarNumeros);
}

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

function ingresarNumero() {
    const input = document.getElementById('numeroInput').value;
    const numero = parseFloat(input.trim());

    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingrese un número válido.';
        return;
    }

    numeros.push(numero); 
    document.getElementById('numeroInput').value = ''; 
    document.getElementById('resultado').innerHTML = `Números ingresados: ${numeros.join(', ')}`;
}

function ordenarNumeros() {
    if (numeros.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay números ingresados para ordenar.';
        return;
    }

    const numerosOrdenados = Burbuja([...numeros]);
    
   
    document.getElementById('resultado').innerHTML += `<br>Lista Ordenada: ${numerosOrdenados.join(', ')}`;
}



// Opción 3
function showOption3() {
    document.getElementById('content').innerHTML = `
        <h2>Calculadora</h2>
        <input type="number" id="num1" placeholder="Número 1">
        <input type="number" id="num2" placeholder="Número 2">
        <button onclick="calculate('add')">Sumar</button>
        <button onclick="calculate('subtract')">Restar</button>
        <button onclick="calculate('multiply')">Multiplicar</button>
        <button onclick="calculate('divide')">Dividir</button>
        <p id="result"></p>
        <h3>Secuencia de Fibonacci</h3>
        <input type="number" id="fiboNum" placeholder="N">
        <button onclick="fibonacci()">Calcular Fibonacci</button>
        <p id="fiboResult"></p>
    `;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Por favor ingrese números válidos.';
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? (num1 / num2) : 'Error: División por cero';
            break;
    }
    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function fibonacci() {
    const n = parseInt(document.getElementById('fiboNum').value);
    if (isNaN(n) || n < 0) {
        document.getElementById('fiboResult').textContent = 'Por favor ingrese un número válido.';
        return;
    }
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById('fiboResult').textContent = `Fibonacci(${n}): ${fib[n]}`;
}

