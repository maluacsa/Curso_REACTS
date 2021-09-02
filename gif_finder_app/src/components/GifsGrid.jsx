import React, { useEffect, useState } from 'react';
import GifsGridItem from './GifsGridItem';

const GifsGrid = ({ categoria }) => {
    const [imagenes, setImagenes] = useState([]);
       useEffect(() => {
           getGifs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
         }, []);

    const getGifs = async () => {
        const api_key ="yAqMoHLiMbCtB3GmSMj8ObOvTxBHt10Y";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url,
            };
        });

    setImagenes(gifs);
    };

    return (
        <>
        <h3>{categoria}</h3>
        <div className ="card-grid">            
            {imagenes.map((imagen) => {
                return <GifsGridItem key={imagen.id} imagen={imagen} />
            })}
        </div>
        </>
    );
};

export default GifsGrid
