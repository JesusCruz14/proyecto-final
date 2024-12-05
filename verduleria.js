document.addEventListener("DOMContentLoaded", () => {
    const verduleriaForm = document.getElementById("verduleriaForm");
    const listaVerduleria = document.getElementById("listaVerduleria");

    const fetchData = async (endpoint, options = {}) => {
        const response = await fetch(endpoint, options);
        if (!response.ok) throw new Error("Error en la solicitud");
        return await response.json();
    };

    const mostrarProductos = async () => {
        try {
            const productos = await fetchData("/productos");
            listaVerduleria.innerHTML = productos
                .map(
                    (prod) =>
                        `<li>${prod.nombre} - ${prod.familia} - Precio por Kilo: $${prod.precio_kg}</li>`
                )
                .join("");
        } catch (error) {
            console.error("Error al mostrar productos:", error);
        }
    };

    verduleriaForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const producto = {
            nombre: document.getElementById("nombreProducto").value,
            familia: document.getElementById("familiaProducto").value,
            tipo: document.getElementById("tipoProducto").value,
            precio_kg: parseFloat(document.getElementById("precioKilo").value),
            cantidad: parseInt(document.getElementById("cantidadProducto").value),
        };

        try {
            await fetchData("/productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });
            verduleriaForm.reset();
            mostrarProductos();
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    });

    mostrarProductos();
});
