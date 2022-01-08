    import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs(category)
            //.then(imgs => setImages(imgs))
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })  
            })
    }, []) // El segundo parametro indica que dependencias provocan que se dispare nuevamente este hook 

    return state;

}
