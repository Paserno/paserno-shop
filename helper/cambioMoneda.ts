

export const currencyExchange = (currency : number) => {

    const money = currency * 841
    const formatoChileno = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
    const numeroFormateado = formatoChileno.format(money);

    return numeroFormateado; 
}

