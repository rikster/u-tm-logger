// rem. snippets for stateless es6 components
// rsc and rscp
import React from 'react';

const Preloader = props => {
    return (
        <div className='progress blue lighten-4'>
            <div className='indeterminate blue'/>
        </div>
    );
};

export default Preloader;
