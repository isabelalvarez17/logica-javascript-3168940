const pantalla = document.querySelector('.pantalla');
const btnMas = document.querySelector('.btn-mas');
const btnMenos = document.querySelector('.btn-menos');

let contador = 1;

function incrementar() {
    contador++;
    pantalla.textContent = contador;
    if (contador >= 30) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = '';
    }
    if (contador >= 10) {
        pantalla.style.color = 'purple';
    } else {
        pantalla.style.color = 'black';
    }
}

function decrementar() {
    contador--;
    pantalla.textContent = contador;
    if (contador >= 30) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = '';
    }
    if (contador >= 10) {
        pantalla.style.color = 'purple';
    } else {
        pantalla.style.color = 'black';
    }
}

btnMas.addEventListener('click', () => {
    incrementar();
});

btnMenos.addEventListener('click', () => {
    if (contador > 0) {
        decrementar();
    }
});

incrementar();
