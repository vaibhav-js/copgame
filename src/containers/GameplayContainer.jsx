import React from 'react';
import '../styles/GameplayContainer.css';
import CopSelectionContainer from './CopSelectionContainer';

const GameplayContainer = ({ children }) => {
  return <div className="gameplay-container">
    <CopSelectionContainer />
  </div>;
}

export default GameplayContainer;
