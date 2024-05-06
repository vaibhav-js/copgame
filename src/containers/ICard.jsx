import React from 'react';
import '../styles/ICard.css'

const ICard = ({ data, type, onSelect }) => {
    const handleCardClick = () => {
        onSelect(data)
    }

    return (
        <div className="i-card" onClick={handleCardClick}>
        <img src={data.image} alt={data.name} />
        <div className="card-details">
            <h3>{data.name}</h3>
            {type === 'CITY' ? (<p>Distance: {data.distance} km</p>) : (<p>Range: {data.range} km</p>)}
        </div>
        </div>
    );
}

export default ICard;
