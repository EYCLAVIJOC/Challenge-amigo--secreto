// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    let regex = /^[A-Za-zÀ-ÿ\s]+$/; // Solo letras y espacios

    if (nombre === "" || !regex.test(nombre)) {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    listaAmigos.push(nombre);
    inputNombre.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía, agregue nombres antes de sortear");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    let ganador = listaAmigos[indiceGanador];
    document.getElementById("resultado").textContent = "🎉 El amigo secreto es: " + ganador + "!";
}
