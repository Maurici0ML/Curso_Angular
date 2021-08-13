/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    
    constructor(
        public nombre: string,
        public direccion: string
    ){}

}

class Heroe extends PersonaNormal{
    //Se pueden definir las propiedades de los tipos de datos cono en las interfaces.
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    //Forma resumida para crear el constructor definiendo los tipos de datos.
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA' );
    }

}

const ironman = new Heroe('ironman', 35, 'Tony');

console.log(ironman);