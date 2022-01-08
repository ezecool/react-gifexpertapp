import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
   
    return (
        <>
            
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            
            {!loading && <h3 className="animate__animated animate__fadeIn">{category}</h3> }

            <div className="card-grid">
                {
                    images.map( img => (
                        //return <li key={img.id}>{img.title}</li>
                        <GifGridItem key={img.id} {...img}/>
                        ))
                    }
            </div>
        </>
    )
}
