import { formatCurrencyBR } from "../../utils/format.js";

function gerarDadosFake() {
    return {
        saldo: Math.floor(Math.random() * 10000000) / 100
    }
}

function popularValoresFake() {
    const dados = gerarDadosFake();

    const saldo = document.getElementById('saldo');

    const saldoFormatado = formatCurrencyBR(dados.saldo);
    sessionStorage.setItem('saldo', saldoFormatado);

    localStorage.getItem('isOculto') !== 'true' && (saldo.innerText = saldoFormatado);
}

popularValoresFake();