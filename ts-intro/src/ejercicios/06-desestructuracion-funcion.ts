/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACION DE ARGUMENTOS EN UNA FUNCION
export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaISV( productos: Producto[] ): [number, number] {

    let total = 0;

    productos.forEach( ( { precio } ) => { //Desestructuracion de la propiedad precio.
        total += precio;
    });

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta];

const [ total, isv ] = calculaISV(articulos); // Desestructuracion de lo que retorna la funcion.

console.log('total: ', total);
console.log('ISV: ', isv);