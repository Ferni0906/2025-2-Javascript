// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
    const pares = Number (await ask("Ingresa los numeros pares del 1 al 100:"));

    for ( i = 1; i <= 100; i++)
        if (i % 2 === 0) {
            console.log(i);
        }
}

main();
