import React from 'react';
import './Best.css'

const Best = (props) => {

    return (
        <div className='best'>
            <h4>{props.best.name}</h4>
        </div>
    );


};

export default Best;