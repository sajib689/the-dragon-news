import React from 'react';

const LeftData = ({category}) => {
    const{name} = category;
    console.log(category);
    return (
        <div>
            
            <p>{category.name}</p>
        </div>
    );
};

export default LeftData;