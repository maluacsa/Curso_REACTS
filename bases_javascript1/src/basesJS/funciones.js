const saludar = function(nombre){
    return `Hola ${nombre}`;
};

const saludar2 =(nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 =(nombre) => (
`Hola ${nombre}`
);

console.log(saludar("Maria"));
console.log(saludar2("Tom"));
console.log(saludar3("Winona"));