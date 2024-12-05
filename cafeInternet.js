document.addEventListener("DOMContentLoaded", () => {
    const cafeForm = document.getElementById("cafeForm");
    const listaCafeInternet = document.getElementById("listaCafeInternet");
    const rentaForm = document.getElementById("rentaForm");
    const agregarTiempoForm = document.getElementById("agregarTiempoForm");

    const fetchData = async (endpoint, options = {}) => {
        const response = await fetch(endpoint, options);
        if (!response.ok) throw new Error("Error en la solicitud");
        return await response.json();
    };

    const mostrarComputadoras = async () => {
        try {
            const computadoras = await fetchData("/computadoras");
            listaCafeInternet.innerHTML = computadoras
                .map(
                    (comp) =>
                        `<li>${comp.producto} - Precio por Minuto: $${comp.cantidad}</li>`
                )
                .join("");
        } catch (error) {
            console.error("Error al mostrar computadoras:", error);
        }
    };

    cafeForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombreComputadora").value;
        const precioMinuto = parseFloat(document.getElementById("precioMinuto").value);

        try {
            await fetchData("/computadoras", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ seccion: "Computadoras", producto: nombre, cantidad: precioMinuto }),
            });
            cafeForm.reset();
            mostrarComputadoras();
        } catch (error) {
            console.error("Error al agregar computadora:", error);
        }
    });

    rentaForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const productoId = document.getElementById("numeroComputadoraRenta").value;
        const tiempoUso = parseInt(document.getElementById("tiempoUsoRenta").value);

        try {
            await fetchData("/iniciar-sesion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ producto_id: productoId, cantidad: tiempoUso }),
            });
            rentaForm.reset();
            mostrarComputadoras();
        } catch (error) {
            console.error("Error al iniciar renta:", error);
        }
    });

    mostrarComputadoras();
});
