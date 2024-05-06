import React, { useState } from 'react';
import SelectionContainer from './SelectionContainer';

const CopContainer = ({ copName, cities, vehicles, setCities, setVehicles, onCompleteSelection }) => {

  const [selectedCity, setSelectedCity] = useState({});
  const [selectedVehicle, setSelectedVehicle] = useState({});

  const handleCitySelect = (city) => {
    const updatedCities = cities.map(c =>
      city === c ? { ...c, isUsed: true } : c
    );
    setCities(updatedCities);
    console.log(updatedCities);
    setSelectedCity({...selectedCity,
      [copName]: city
    });
    console.log(selectedCity);
  }

  const handleVehicleSelect = (vehicle) => {
    const updatedVehicles = vehicles.map(v =>
      vehicle === v ? { ...v, isUsed: true } : v
    );
    setVehicles(updatedVehicles);
    setSelectedVehicle({...selectedVehicle, 
      [copName]: vehicle
    });
    onCompleteSelection();
    console.log(selectedVehicle)
  }

  return (
    <div className="cop-container">
      <div className="cop-info">
        {!selectedCity[copName] && <SelectionContainer copName={copName} type='CITY' options={cities} onOptionsSelect={handleCitySelect} />}
        {selectedCity[copName] && !selectedVehicle[copName] && <SelectionContainer copName={copName} type='VEHICLE' options={vehicles} onOptionsSelect={handleVehicleSelect} />}
      </div>
    </div>
  );
}

export default CopContainer;
