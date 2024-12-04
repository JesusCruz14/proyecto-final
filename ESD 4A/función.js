const para = document.querySelector("button");
para.addEventListener("click",upDateName);

function upDateName(){
    let Name = prompt("Escribe un nombre: ");
    para.textContent = "Player 1:  " + Name;
}