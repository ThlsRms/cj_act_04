'use strict'
const { guardarJSON, leerJSON } = require('./jsonHelpers.js');

const notasDir = './data/notas.json';

const crearNota = (titulo, cuerpo) => {// return length
    let notas = leerJSON(notasDir);
    let tituloIndex = notas.findIndex(nota => nota.titulo === titulo);

    if (tituloIndex > -1) {
        notas.push({ titulo: titulo, cuerpo: cuerpo });
        let rtrn = 'Nota creada: ' + { titulo: titulo, cuerpo: cuerpo };
        guardarJSON(notasDir, notas);
        return rtrn;
    } else {
        return 'La nota ya existe.';
    }
}

const borrarNota = (titulo) => { // return nota borrada
    let notas = leerJSON(notasDir);
    let tituloIndex = notas.findIndex(nota => nota.titulo === titulo);

    if (tituloIndex > -1) {
        let rtrn = notas.splice(tituloIndex, 1)[0];
        guardarJSON(notasDir, notas);
        return rtrn;
    } else {
        return 'Nada para borrar';
    }
}

const ordernarNotas = (orden) => {
    let notas = leerJSON(notasDir);
    notas.sort((notaA, notaB) => notaA[orden].toLowerCase() < notaB[orden].toLowerCase() ? -1 : 1);
    let rtrn = `Notas ordenadas por ${orden}`;
    guardarJSON(notasDir, notas);
    return rtrn;
}

const buscarNotas = (buscaArg) => {
    let notas = leerJSON(notasDir);
    return notas.filter(nota => {
        return nota.cuerpo.toLowerCase().includes(buscaArg.toLowerCase()) || 
        nota.titulo.toLowerCase().includes(buscaArg.toLowerCase());
    })
}

module.exports = { 
    crearNota, borrarNota, ordernarNotas, buscarNotas
}
