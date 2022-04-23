import React from 'react';

//Gif
import loading from '../gif/loading.gif';
const Loader = () => {
    return (
        <div>
            <img src={loading} alt="loader" />
            <h1>Please Wait ...</h1>
        </div>
    );
};

export default Loader;