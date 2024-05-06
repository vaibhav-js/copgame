import React from 'react';
import '../styles/CopSelectionCard.css';

const CopSelectionCard = ({ cardData }) => {
  return (
    <div className="cop-selection-card">
      <p>{cardData.title}</p>
      <p>{cardData.description}</p>
    </div>
  );
}

export default CopSelectionCard;
