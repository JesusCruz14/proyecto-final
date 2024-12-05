document.addEventListener("DOMContentLoaded", () => {
    const ferreteriaForm = document.getElementById("ferreteriaForm");
    const listaFerreteria = document.getElementById("listaFerreteria");

    const fetchData = async (endpoint, options = {}) => {
        const response = await fetch(endpoint, options);
        if (!response.ok) throw new Error("Error en la solicitud");
        return await response.json();
    };

    const mostrarProductos = async () => {
        try {
            const productos = await fetchData("/productos");
            listaFerreteria.innerHTML = productos
                .map(
                    (prod) =>
                        `<li>${prod.nombre} - ${prod.familia} - Precio: $${prod.precio}</li>`
                )
                .join("");
        } catch (error) {
            console.error("Error al mostrar productos:", error);
        }
    };

    ferreteriaForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const producto = {
            nombre: document.getElementById("nombreFerreteria").value,
            familia: document.getElementById("familiaFerreteria").value,
            precio: parseFloat(document.getElementById("precioFerreteria").value),
            cantidad: parseInt(document.getElementById("cantidadFerreteria").value),
        };

        try {
            await fetchData("/productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });
            ferreteriaForm.reset();
            mostrarProductos();
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    });

    mostrarProductos();
});
