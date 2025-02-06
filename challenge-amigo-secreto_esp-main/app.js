// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// lista creadad para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Limpiar espacios en blanco

    // Validar que no se meta un vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validar si el nombre ya existe en la lista para evitar repeticiones
    //En este condiciones sobre los nombres existentes tuve que apoyarme con la IA, puesto a que no me daba una idea clara de como añadir esta función en JavaScript
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre a la lista y actualizar la visualización
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo

        // Crear botón de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X"; // Texto del botón
        btnEliminar.classList.add("delete-button"); // Clase para estilos
        btnEliminar.onclick = () => eliminarAmigo(index); // Asignar la función eliminarAmigo

        li.appendChild(btnEliminar); // Agregar botón al <li>
        lista.appendChild(li); // Agregar <li> a la lista
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el nombre del array
    actualizarLista(); // Actualizar la lista en pantalla
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> ¡El amigo secreto es <strong>${amigoSeleccionado}</strong>! </p>`;
}





