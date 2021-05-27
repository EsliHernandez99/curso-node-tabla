const fs = require('fs');
const colors = require('colors');

/*const crearArchivo = (base = 5) => {
    //console.log(`tabla-${base}.txt creada`);
    return new Promise((resolve, reject) => {

        console.log('=============');
        console.log('Tabla del:',base);
        console.log('=============');

        let salida = '';

        for (let i = 1; i < 11; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        (salida)
            ? resolve(`tabla-${base}.txt`)
            : reject(`No se pudo crear el archivo${id}`);

    });
}*/

const crearArchivo = async (base = 5, listar=false, hasta=10) => {
    //console.log(`tabla-${base}.txt creada`);

    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <=hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar==true) {

            console.log('============='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('============='.green);
            console.log(consola); 
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch {
        throw err;
    }
}


module.exports = {
    crearArchivo
}

