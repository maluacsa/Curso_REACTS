import heroes from "./data/heroes";

//map: Noss permite recorrer el contenido dl arreglo, 
//hacer algo con ese contenido y nos los devuelve crando ese arreglo
//callback es una funciion ejecutandode dentro de otra función
//const nuevo = heroes.map((item) => {
 // return { ...item, version: 1.0 };
//});

//filter
//const nuevo = heroes.filter({item} => {
//    return item.owner === "DC";
//});

//find
const nuevo = heroes.find((item) {
    return item.owner === "Marvel";
});

console.log({heroes});
console.log({nuevo});