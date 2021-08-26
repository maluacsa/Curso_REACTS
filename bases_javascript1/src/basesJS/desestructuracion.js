//Desestructuración

const persona ={
    nombre: "Maria Luisa",
    apellidos: "Acosta Sanjuan",
    email: "maluacsa@hotmail.com"
};
//Spread
const persona2 = { ...persona };

persona2.nombre ="Carlos";

console.log("P1", persona.nombre);
console.log("P2", persona2.nombre);
//



//Desestructuracion de arreglos

const personajes = ['Candy', 'Anthony', "Terry", "Annie"];

const [, , personaje3] = personajes;

const caracteres = personajes;

caracteres[3] = "Nadie"; 
console.log({personaje3});
console.log({caracteres});