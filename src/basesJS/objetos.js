
const persona = {
    nombre:'Tom',
    apellido: 'Cruise',
    edad: 55,
    saludar: function(){
        console.log("Hola a todos");
    },
};

console.log(persona["nombre"]);
persona.saludar();