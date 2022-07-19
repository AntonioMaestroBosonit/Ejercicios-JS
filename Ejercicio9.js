// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.
// Ejemplo de uso de la función:

// const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = toLowercaseKeys(myObject);
// console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

const toLowercaseKeys = (obj) => {
    let newObj = {};

    Object.entries(obj).forEach(([key,value]) => {
        newObj[key.toLowerCase()] = value;
    })

    return newObj;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street', Age: 30};
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase);