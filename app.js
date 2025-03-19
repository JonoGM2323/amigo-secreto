// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    const botonAdicionar = document.querySelector('.button-add');
    const listaAmigos = document.getElementById('listaAmigos');
    const botonSortear = document.querySelector('.button-draw');
    const resultadoDiv = document.getElementById('resultado');
    let amigos = [];

    function agregarAmigo() {
        const nombre = inputAmigo.value.trim();
        if (nombre === '') {
            alert('Por favor, ingrese un nombre válido.');
            return;
        }
        if (amigos.includes(nombre)) {
            alert('Este amigo ya ha sido agregado.');
            inputAmigo.value = '';
            return;
        }
        amigos.push(nombre);
        actualizarListaAmigos();
        inputAmigo.value = '';
    }

    function actualizarListaAmigos() {
        listaAmigos.innerHTML = '';
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert('Por favor, agregue al menos dos amigos para realizar el sorteo.');
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        resultadoDiv.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    }

    botonAdicionar.addEventListener('click', agregarAmigo);

    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });

    botonSortear.addEventListener('click', sortearAmigo);
});