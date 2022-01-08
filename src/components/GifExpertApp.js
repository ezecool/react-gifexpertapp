import React, { useState } from "react";
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([''])

    // const handleAdd = () => {
    //     // setCategories(categories.concat('Nueva'))
    //     // setCategories([...categories, 'Nueva'])
    //     setCategories( categories => [...categories, 'Nueva'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {/* <button>Add</button> */}
            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category}/>)
                }
            </ol>
        </>
    )
}