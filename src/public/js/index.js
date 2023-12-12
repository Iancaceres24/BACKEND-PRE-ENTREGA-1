const socket = io();

socket.on("connect", () => {
    console.log("Conectado al servidor de sockets");
});

socket.on("updateProducts", (data) => {
    console.log("Productos actualizados:", data.productos);

    const listaProductos = document.getElementById("ProductosId");
    listaProductos.innerHTML = "";
    data.productos.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `Producto: ${producto.title}, Precio: ${producto.price}`;
        listaProductos.appendChild(li);
    });
});