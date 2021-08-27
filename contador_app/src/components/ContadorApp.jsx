import React, { useState } from 'react';

const ContadorApp = ({valor}) => {   
    const [cuenta, setCuenta] = useState(valor);  
     
    const incrementaCuenta = (e) => {
       setCuenta(cuenta + 1);
     };

     const decrementaCuenta = (e) => {
        setCuenta(cuenta - 1);
      };
      const igualCuenta = (e) => {
        setCuenta(valor);
      };


    return (
        <> 
          <h1>Contador App</h1>  
          <hr></hr>
          <h2>{cuenta}</h2>
          <button onClick={(e) => incrementaCuenta(e)}>Incremento en 1</button>
          <br></br>
          <p></p>
          <button onClick={(e) => decrementaCuenta(e)}> Decremento en 11</button>
          <p></p>
          <button onClick={(e) => igualCuenta(e)}>Valor original</button>
          
        </>
    );
};

export default ContadorApp;
//Aplicación contador primer useState
//Tarea : copiar y pegar y cambiar algo



