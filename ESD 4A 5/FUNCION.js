function compararAND() {

    let valor1 = document.getElementById("valor1-and").value === "true";
    let valor2 = document.getElementById("valor2-and").value === "true";
    let resultado = valor1 && valor2;
    document.getElementById("resultado-and").textContent = "Resultado de AND: " + resultado;
}

function compararOR() {
    let valor1 = document.getElementById("valor1-or").value === "true";
    let valor2 = document.getElementById("valor2-or").value === "true";
    let resultado = valor1 || valor2;
    document.getElementById("resultado-or").textContent = "Resultado de OR: " + resultado;
}

function compararNOT() {
    let valor = document.getElementById("valor-not").value === "true";
    let resultado = !valor;
    document.getElementById("resultado-not").textContent = "Resultado de NOT: " + resultado;
}

function compararNullish() {
    let valor = document.getElementById("valor-nullish").value || null;
    let resultado = valor ?? "Valor por defecto";
    document.getElementById("resultado-nullish").textContent = "Resultado de Nullish Coalescing: " + resultado;
}