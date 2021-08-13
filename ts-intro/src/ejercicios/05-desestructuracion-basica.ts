/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor= {
    volumen: 90,
    segundo: 36,
    cancion: 'Absurd',
    detalles: {
        autor: ' Hola',
        anio: 2020
    }
}

/*DESESTRUCTURACION DE OBJETOS
---------------------------------------------------------------*/
//const autor= 'Fulano'; EN CASO DE QUE EXISTA OTRA VARIABLE O CONSTANTE CON EL MISMO NOMBRE, SE LE PUEDE RENOMBRAR EN LA DESESTRUCTURACION.
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

/*Desestructuracion en una sola linea-------------------------------------
const { volumen, segundo, cancion, detalles:{ autor: autorDetalle 
(SE LE ESTA RENOMBRANDO PARA QUE NO HAYA CONFLICTO) } } = reproductor;*/

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de:', segundo);
// console.log('La cancion actual es:', cancion);
// console.log('El autor es:', autor);

/*DESESTRUCTURACION DE ARREGLOS
---------------------------------------------------------------*/
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz //Para las localidades que no se necesiten, se dejan las comas
//Ej [p1, , p3];

/*console.log('Personaje 1', dbz[0]);*/ console.log('Personaje 1', p1);
/*console.log('Personaje 2', dbz[1]);*/ console.log('Personaje 1', p2);
/*console.log('Personaje 3', dbz[2]);*/ console.log('Personaje 1', p3);
