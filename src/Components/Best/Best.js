import React from 'react';

const Best = (props) => {
    return (
        <div>
            <h3>Best for you!!</h3>
            <p>{props.best.name}</p>
        </div>
    );
};

export default Best;