import React,{ useState } from "react";
import AddCategory from "./AddCategory";
import GifsGrid from "./GifsGrid";
import "./index.css";

const GifFinderApp = () => {
    const [categorias, setCategorias] = useState([
        "Spiderman",
        "Iroman", 
        "Black Widow",
     ]);

    return (
        <>
            <h1>Gif Finder App</h1>  
            <hr />
            {/* <button onClick={handleAddCategory}>Agregar</button> */}
            <AddCategory setCategorias={setCategorias} categorias={categorias} />
            {categorias.map((categoria) => {
                return  <GifsGrid key={categoria} categoria={categoria} />;
            })}                      
        </>
    );
};

export default GifFinderApp;
