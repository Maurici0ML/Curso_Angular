/*
    ===== Código de TypeScript =====
*/

//Encadenamiento opcional

interface Pasajero{
    nombre: string;
    hijos?: string[]; //El signo significa que la propiedad es opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0; //Evaliua si hay hijos, y si no, returna undefined.

    console.log(cuantosHijos);

}

imprimeHijos(pasajero1);