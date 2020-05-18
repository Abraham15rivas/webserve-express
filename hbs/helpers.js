const hbs = require('hbs');

// Helpers (para ejecutar función cuando el template lo requiera)
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (text) => {

    let palabras = text.split(' ')
    palabras.forEach((key, idx) => {
        palabras[idx] = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    });

    return palabras.join(' ')
})