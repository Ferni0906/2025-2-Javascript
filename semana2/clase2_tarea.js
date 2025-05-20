// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir


const { ask } = require('../helpers/input');

async function main(){

    let opcion = '';
    let frutas = [];

    while (opcion !== '4'){
        opcion = await ask('¿Que deseas hacer? \n1. Agregar fruta \n2. Eliminar fruta \n3. Ver lista de frutas \n4. Salir');
        if (opcion === '1'){
            //Agregar
            let frutaNueva= await ask('¿Que fruta deseas agregar?: ');
            frutas.push(frutaNueva);
            console.log(`Fruta agregada: ${frutaNueva}`);
            console.log('Frutas disponibles: ', frutas);
        }

    }





}

main();