// const lista = [];

// lista.push("Belinda");
// lista.push("Badbuny")
// lista.push("Residente");
// lista.push("Anuel brr");
// lista.push("Arkangel");
// console.log(lista);
// lista.push("Putin", "vicente Fox", "Enrrique Peñanieto", "Cabecita de Algodon", "Oboma")
// console.log(lista);
// lista.pop("Arkangel");

// const personas = [
//     {nombre: "Vicente Fox", edad: 99, Genero: "No Binario"},
//     {nombre: "Arkangel", edad: 38, Genero: "Callejero"},
//     {nombre: "Stephen hawking", edad: "Muerto", Genero: "Alcon milenario"},

// ]
// for(let i=0; i<personas.length; i++){
// console.log(personas[i].nombre);

// }
// const personas = [
//     {nombre: "Vicente Fox", edad: 99, Genero: "No Binario"},
//     {nombre: "Arkangel", edad: 38, Genero: "Callejero"},
//     {nombre: "Stephen Hawking", edad: "Muerto", Genero: "Alcon milenario"},
// ];

// const form = document.getElementById('form');
// const listaPersonas = document.getElementById('lista-personas');

// function mostrarPersonas() {
//     listaPersonas.innerHTML = '';
//     personas.forEach((persona, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${persona.nombre}, ${persona.edad} años, ${persona.Genero}`;
        
//         const btnEliminar = document.createElement('button');
//         btnEliminar.textContent = 'Eliminar';
//         btnEliminar.className = 'remove';
//         btnEliminar.onclick = () => {
//             eliminarPersona(index);
//         };

//         li.appendChild(btnEliminar);
//         listaPersonas.appendChild(li);
//     });
// }

// function eliminarPersona(index) {
//     personas.splice(index, 1);
//     mostrarPersonas();
// }

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const nombre = document.getElementById('nombre').value;
//     const edad = document.getElementById('edad').value;
//     const genero = document.getElementById('genero').value;

//     personas.push({nombre, edad, Genero: genero});
//     mostrarPersonas();

//     form.reset();
// };


// mostrarPersonas();


//Que agrege mas nombres y eliminar nombres utilizando push y pop


const form = document.getElementById('form');
const listaPersonas = document.getElementById('lista-personas');
const formProducto = document.getElementById('form-producto');
const listaProductos = document.getElementById('lista-productos');
let personas = [];
let productos = [];
let indexEditando = null;

function mostrarPersonas() {
    listaPersonas.innerHTML = '';
    personas.forEach((persona, index) => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre}, ${persona.edad} años, ${persona.Genero}`;

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.className = 'edit';
        btnEditar.onclick = () => {
            editarPersona(index);
        };

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'remove';
        btnEliminar.onclick = () => {
            eliminarPersona(index);
        };

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        listaPersonas.appendChild(li);
    });
}

function eliminarPersona(index) {
    personas.splice(index, 1);
    mostrarPersonas();
}

function editarPersona(index) {
    const persona = personas[index];
    document.getElementById('nombre').value = persona.nombre;
    document.getElementById('edad').value = persona.edad;
    document.getElementById('genero').value = persona.Genero;
    indexEditando = index;
}

form.onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;

    if (indexEditando !== null) {
        personas[indexEditando] = { nombre, edad, Genero: genero };
        indexEditando = null;
    } else {
        personas.push({ nombre, edad, Genero: genero });
    }

    mostrarPersonas();
    form.reset();
};

// Funcionalidad de Productos
function mostrarProductos() {
    listaProductos.innerHTML = '';
    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre}, $${producto.precio}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'remove';
        btnEliminar.onclick = () => {
            eliminarProducto(index);
        };

        li.appendChild(btnEliminar);
        listaProductos.appendChild(li);
    });
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    mostrarProductos();
}

formProducto.onsubmit = (e) => {
    e.preventDefault();
    const nombreProducto = document.getElementById('producto-nombre').value;
    const precioProducto = document.getElementById('producto-precio').value;

    productos.push({ nombre: nombreProducto, precio: precioProducto });
    mostrarProductos();
    formProducto.reset();
};

mostrarPersonas();
mostrarProductos();

