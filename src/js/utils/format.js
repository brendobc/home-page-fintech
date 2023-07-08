function formatCurrencyBR(number) {
    const [inteiros, centavos] = String(number).split('.');

    const inteirosLastIndex = inteiros.length - 1;
    let count = 0, formattedCurrency = '';

    for(let i = inteirosLastIndex; i >= 0; i--) {
        formattedCurrency = inteiros.charAt(i) + formattedCurrency;

        if(++count % 3 === 0) {
            formattedCurrency = '.' + formattedCurrency;
        }
    }

    switch(centavos.length) {
        case 0:
            formattedCurrency += ',00';
            break;
        case 1:
            formattedCurrency += `,${centavos}0`;
            break;
        default:
            formattedCurrency += `,${centavos}`;
    }

    return 'R$ ' + formattedCurrency;
}

export { formatCurrencyBR }