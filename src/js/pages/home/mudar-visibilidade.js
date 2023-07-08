const btnAlterarVisibilidade = document.getElementById('mudar-visibilidade'),
      elementosMudarVisibilidade = document.querySelectorAll('[data-muda-visibilidade]');

btnAlterarVisibilidade.addEventListener('click', () => {
    localStorage.setItem('isOculto', !(localStorage.getItem('isOculto') === 'true'));

    atualizaVisibilidade();
});

function atualizaVisibilidade() {
    Array.prototype.forEach.call(elementosMudarVisibilidade, (elemento) => {
        elemento.innerText = localStorage.getItem('isOculto') === 'true' ?
            sessionStorage.getItem('saldo') :
            elemento.getAttribute('data-muda-visibilidade');
    });
}

atualizaVisibilidade();