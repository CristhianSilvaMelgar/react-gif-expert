import { useState } from 'react'

import { GifGrid, AddCategory } from './Components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />))
            }
            {/* cFZ3OY35Xoz6fFntAbBFDHSOW5TYpUJp */}
        </>
    );
}
