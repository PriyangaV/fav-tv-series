import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
    return (
        <button style={{padding: 10, borderRadius: 5, outline: 'none'}}>
            <Link to={`/`} style={{color: '#1c7e9c', textDecoration: 'none', fontSize: 14, fontWeight: 'bold'}}>
                Back to series search
            </Link>
        </button>
    )
}

export default Button;