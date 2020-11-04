'use strict';

const notas = [
    {titulo: 'truco de VSCode', cuerpo: 'usar snippets para todos'},
    {titulo: 'Prestaba llegaron misterio si lo', cuerpo: 'Cultivar se linajuda epigonos practico ha.'},
    {titulo: 'beber agua', cuerpo: 'Yo fantastico anaranjado trabajador eh.'},
    {titulo: 'Afectacion', cuerpo: 'calcetines reconditos etc fue imprevisto mas encendidos arrepintio.'},
    {titulo: 'Aprender', cuerpo: 'es instante cobraban hermanas inaudito ti un'},
    {titulo: 'De confeso negarle cayeron le', cuerpo: 'Olvidado volviera probable monotono ma sollozos il.'},
    {titulo: 'ceremonial', cuerpo: 'Con cual suyo supo aire fue boga. '},
    {titulo: 'Gentilica', cuerpo: 'revolvian enamorado oh iconoteca yo cristiano documento.'},
]

const crearNota = (notasArr, titulo, cuerpo) => {// return length
    notasArr.push({titulo: titulo, cuerpo: cuerpo});
    return notasArr.length;
}

const borrarNota = (notasArr, titulo) => { // return nota borrada
    if (notasArr.findIndex(nota => { return nota.titulo === titulo; }) !== -1) {
        return notasArr.splice(notasArr.findIndex(nota => {
            return nota.titulo === titulo;
        }), 1);
    } else {
        return 'Nada para borrar';
    }
}

const ordernarNotas = (notasArr, orden) => {// orden = 'titulo' o 'cuerpo'
    if (orden === 'titulo') {
        return notasArr.sort((tituloA, tituloB) => {
            return tituloA.titulo.toLowerCase() < tituloB.titulo.toLowerCase()? -1 : 1;
        })
    }
    else if (orden === 'cuerpo') {
        return notasArr.sort((cuerpoA, cuerpoB) => {
            return cuerpoA.cuerpo.toLowerCase() < cuerpoB.cuerpo.toLowerCase()? -1 : 1;
        })
    }
}

const buscarTextoEnNotas = (notasArr, buscaArg) => {
    /* // return primer resultado
    return notasArr.find(nota => {
        return nota.cuerpo.toLowerCase().includes(buscaArg.toLowerCase());
    }); */

    // return todos resultados
    return notasArr.filter(nota => {
        return nota.cuerpo.toLowerCase().includes(buscaArg.toLowerCase());
    })
}

console.log('Crear nota', crearNota(notas, 'morales', 'Tampoco no caseros modesto moclearrales vapores ha el intimas.'));
console.log('Borrar mala nota: ', borrarNota(notas, 'de VSCode'));
console.log('Borrar nota: ', borrarNota(notas, 'truco de VSCode'));
console.log('Ordenar por contenido', ordernarNotas(notas, 'cuerpo'));
console.log('Ordenar por titulo', ordernarNotas(notas, 'titulo'));
console.log('Buscar: epigonos', buscarTextoEnNotas(notas, 'epigonos'));
console.log('Buscar: yo', buscarTextoEnNotas(notas, 'yo'));