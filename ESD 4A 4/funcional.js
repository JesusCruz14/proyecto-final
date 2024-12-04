class FormManager {
    constructor() {
        this.data = [];
    }
    

    addData(name, age, zodiac) {
        this.data.push({ name, age, zodiac });
        this.renderData();
    }

    deleteData(index) {
        this.data.splice(index, 1);
        this.renderData();
    }

    editData(index, name, age, zodiac) {
        this.data[index] = { name, age, zodiac };
        this.renderData();
    }

    renderData() {
        const content = document.getElementById('content');
        content.innerHTML = '';
        this.data.forEach((item, index) => {
            content.innerHTML += `
                <div>
                    ${item.name}, ${item.age}, ${item.zodiac} 
                    <button class="button1" onclick="formManager.deleteData(${index})">Eliminar</button>
                    <button class="button2" onclick="formManager.showEditForm(${index})">Editar</button>
                </div>
            `;
        });
    }

    showForm() {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>Formulario</h2>
            <input id="name" placeholder="Nombre" />
            <input id="age" placeholder="Edad" type="number" />
            <input id="zodiac" placeholder="Signo Zodiacal" />
            <button class="button3" onclick="formManager.addData(
                document.getElementById('name').value,
                document.getElementById('age').value,
                document.getElementById('zodiac').value
            )">Guardar</button>
        `;
    }

    showEditForm(index) {
        const item = this.data[index];
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>Editar Datos</h2>
            <input id="name" value="${item.name}" />
            <input id="age" value="${item.age}" type="number" />
            <input id="zodiac" value="${item.zodiac}" />
            <button class="button3" onclick="formManager.editData(${index}, 
                document.getElementById('name').value, 
                document.getElementById('age').value, 
                document.getElementById('zodiac').value
            )">Guardar Cambios</button>
        `;
    }
}

class RandomNumbersManager {
    constructor() {
        this.numbers = [];
    }

    generateRandomNumbers(count) {
        this.numbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
        this.renderNumbers();
    }

    sortNumbers() {
        this.numbers.sort((a, b) => a - b);
        this.renderNumbers();
    }

    renderNumbers() {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>Números Aleatorios</h2>
            <div>${this.numbers.join(', ')}</div>
            <button class="button1" onclick="randomNumbersManager.sortNumbers()">Ordenar de Menor a Mayor</button>
            <button class="button2" onclick="randomNumbersManager.generateRandomNumbers(10)">Generar Números Aleatorios</button>
        `;
    }
}

class Calculator {
    static calculate(operation) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        let result;

        switch (operation) {
            case 'suma':
                result = num1 + num2;
                break;
            case 'resta':
                result = num1 - num2;
                break;
            case 'multiplicacion':
                result = num1 * num2;
                break;
            case 'division':
                result = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
                break;
        }

        document.getElementById('result').innerText = `Resultado: ${result}`;
    }

    static showCalculator() {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>Calculadora</h2>
            <input id="num1" type="number" placeholder="Número 1" />
            <input id="num2" type="number" placeholder="Número 2" />
            <button class="button3" onclick="Calculator.calculate('suma')">+</button>
            <button class="button3" onclick="Calculator.calculate('resta')">-</button>
            <button class="button3" onclick="Calculator.calculate('multiplicacion')">*</button>
            <button class="button3" onclick="Calculator.calculate('division')">/</button>
            <div id="result"></div>
        `;
    }
}

const formManager = new FormManager();
const randomNumbersManager = new RandomNumbersManager();

document.getElementById('formBtn').onclick = () => formManager.showForm();
document.getElementById('randomNumbersBtn').onclick = () => randomNumbersManager.generateRandomNumbers(10);
document.getElementById('calculatorBtn').onclick = () => Calculator.showCalculator();
