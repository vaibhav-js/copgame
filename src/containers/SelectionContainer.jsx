import React from 'react'
import ICard from './ICard';
import '../styles/SelectionContainer.css'

const SelectionContainer = ({type, options, onOptionsSelect }) => {

    const handleOptionsSelect = (option) => {
        onOptionsSelect(option)
    }

    return (
        <div className="selection-container">
          <center><h2 className='selection-heading'>Select a {type}:</h2></center>
          <div className="option-cards">

            {options.map((option, index) => (
              (!option.isUsed) ? <ICard key={index} type={type} data={option} onSelect={() => handleOptionsSelect(option)} /> : ''
            ))}
          </div>
        </div>
      );
}

export default SelectionContainer