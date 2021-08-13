/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends {new(...args:any[]): {} }>(
        constructor: T
    )   {
        return class extends constructor {
            newProperty = 'new property';
            hello = 'override';
        };
    }

/*Un decorador no es mas que una funcion que expande
 su clase añadiendole funcionalidades especiales*/


@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);