function numbers(a, b) {
    let sum = a + b;
    let subtract = a - b;
    let multiplication = a * b;
    let division = a / b;
    let message = '';

    if (typeof a !== 'number' || typeof b !== 'number' || b==0) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return "Los parámetros solo pueden ser números";
        } else {
            message += `Suma: ${sum.toFixed(2)}\n`;
            message += `Resta: ${subtract.toFixed(2)}\n`;
            message += `Multiplicación: ${multiplication.toFixed(2)}\n`;
            message += `La Division por 0 no es admitida`;
        }
    } else {
        message += `Suma: ${sum.toFixed(2)}\n`;
        message += `Resta: ${subtract.toFixed(2)}\n`;
        message += `Multiplicación: ${multiplication.toFixed(2)}\n`;
        message += `División: ${division.toFixed(2)}\n`;
    }

    return message;
}

const result = numbers(2, 4);
