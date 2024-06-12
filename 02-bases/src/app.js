// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');
// const getPokemonById = require('./js-foundation/07-async-await');
// const getPokemonById = require('./js-foundation/08-adapter-pattern');
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo!');
logger.error('Error en la aplicación!');
// getPokemonById(4)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((error) => console.error(error))
//     .finally(() => console.log('Petición finalizada'));



// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge }); // Se aplicó el patrón de diseño Factory function

// const obj = { name: 'Adelso', birthdate: '1997-12-24' }

// const adelso = makePerson(obj);

// console.log(adelso);