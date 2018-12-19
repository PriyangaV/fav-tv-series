import React from 'react';
import Button from '../Button';

const Content = ({ show }) => {
    return (
        <div>
            <p><span style={{color: '#1c7e9c', fontWeight: 'bold'}}>{show.name}</span></p>

            { show.premiered === null && <p>Premiered - Not yet released.</p> }

            { show.premiered !== null && <p>Premiered - <span style={{color: '#1c7e9c', fontWeight: 'bold'}}>{show.premiered}</span></p> }

            { show.rating.average === null && <p>Rating - Not yet rated.</p> }

            { show.rating.average !== null && <p>Rating - <span style={{color: '#1c7e9c', fontWeight: 'bold'}}> {show.rating.average}</span> </p> }

            <p>Episodes - <span style={{color: '#1c7e9c', fontWeight: 'bold'}}>{show._embedded.episodes.length}</span></p>

            {
                show.image !== null
                && 
                <p>
                    <img 
                        alt="Show" 
                        src={show.image.medium}
                        />
                </p>
            }
            <Button />
        </div>
    )
}

export default Content;