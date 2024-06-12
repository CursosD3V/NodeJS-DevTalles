// const { getAge, getUUID } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}




// const obj = { name: 'Adelso', birthdate: '1997-12-24' }

// const adelso = buildPerson(obj);

// console.log(adelso);

module.exports = {
    buildMakePerson,
}