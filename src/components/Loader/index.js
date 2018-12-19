import React from 'react';
import loaderSrc from '../../assets/loader.gif';
// import './index.css';

const Loader = props => (
    <div className="loader-icon">
        <img 
            style={{ margin: 40 }}
            src={loaderSrc} 
            alt="Loader icon" />
    </div>
)

export default Loader;