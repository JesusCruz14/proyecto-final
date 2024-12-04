
let Milista = ["leche", "nada", "frijoles"];


const itemList = document.getElementById('itemList');
function mostrarLista() {
    itemList.innerHTML = ''; 
    Milista.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}
mostrarLista();


document.getElementById('addButton').addEventListener('click', function() {
    const newItem = document.getElementById('itemInput').value;
    if (newItem) {
        Milista.push(newItem);
        mostrarLista();
        document.getElementById('itemInput').value = ''; 
    }
});


document.getElementById('removeButton').addEventListener('click', function() {
    const removeItem = document.getElementById('removeInput').value;
    const index = Milista.indexOf(removeItem);
    if (index !== -1) {
        Milista.splice(index, 1);
        mostrarLista();
        document.getElementById('removeInput').value = ''; 
    }
});


const personas = [
    { nombre: "Luisito", edad: 20, genero: "Masculino" },
    { nombre: "Paco", edad: 48, genero: "Vato" },
    { nombre: "Israel", edad: 36, genero: "Bisexual" }
];


const personList = document.getElementById('personList');
function mostrarPersonas() {
    personList.innerHTML = ''; 
    personas.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre}, ${persona.edad} años, ${persona.genero}`;
        personList.appendChild(li);
    });
}
mostrarPersonas();

document.getElementById('addPersonButton').addEventListener('click', function() {
    const nombre = document.getElementById('nombreInput').value;
    const edad = document.getElementById('edadInput').value;
    const genero = document.getElementById('generoInput').value;
    if (nombre && edad && genero) {
        personas.push({ nombre, edad: Number(edad), genero });
        mostrarPersonas();
        // Limpiar inputs
        document.getElementById('nombreInput').value = '';
        document.getElementById('edadInput').value = '';
        document.getElementById('generoInput').value = '';
    }
});


document.getElementById('removePersonButton').addEventListener('click', function() {
    const nombre = document.getElementById('nombreRemoveInput').value;
    const index = personas.findIndex(persona => persona.nombre === nombre);
    if (index !== -1) {
        personas.splice(index, 1);
        mostrarPersonas();
        document.getElementById('nombreRemoveInput').value = ''; 
    }
});
