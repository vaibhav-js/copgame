import React, { useState } from 'react';
import '../styles/CopSelectionContainer.css';
import CopContainer from './CopContainer';

const CopSelectionContainer = () => {
  const [selectedCopIndex, setSelectedCopIndex] = useState(0);
  const totalCops = 3; // Total number of cops

  const [cities, setCities] = useState([
    { name: "Yapkashnagar", distance: 60, isUsed: false, image: '/city1.png' },
    { name: "Lihaspur", distance: 50, isUsed: false, image: '/city2.png' },
    { name: "Narmis City", distance: 40, isUsed: false, image: '/city3.png' },
    { name: "Shekharvati", distance: 30, isUsed: false, image: '/city4.png' },
    { name: "Nuravgram", distance: 20, isUsed: false, image: '/city5.png' }
  ]);

  const [vehicles, setVehicles] = useState([
    { name: "EV Bike 1", range: 60, count: 1, isUsed: false, image: '/ev_bike.png' },
    { name: "EV Bike 2", range: 60, count: 1, isUsed: false, image: '/ev_bike.png' },
    { name: "EV SUV", range: 120, count: 1, isUsed: false, image: '/ev_suv.png' },
    { name: "EV Car", range: 100, count: 1, isUsed: false, image: '/ev_car.png' }
  ]);

  const onCompleteSelection = (data) => {
    // Increment selectedCopIndex to show the next CopContainer
    setSelectedCopIndex(prevIndex => prevIndex + 1);
  }

  return (
    <div className="cop-selection-container" style={{ width: `${totalCops*100}%` }}>
      {/* Render each CopContainer and apply slide effect based on selectedCopIndex */}
      {[...Array(totalCops).keys()].map(index => (
        <div
          key={index}
          className={`cop-container-wrapper ${index === selectedCopIndex ? 'active' : 'inactive'}`}
          style={{ transform: `translateX(-${selectedCopIndex * 100}%)` }}
        >
          <CopContainer cities={cities} setCities={setCities} setVehicles={setVehicles} vehicles={vehicles} copName={index + 1} onCompleteSelection={onCompleteSelection} />
        </div>
      ))}
    </div>
  )
}

export default CopSelectionContainer;
