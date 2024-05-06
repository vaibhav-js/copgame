import React, { useEffect, useState } from 'react';
import '../styles/CopSelectionContainer.css';
import CopContainer from './CopContainer';

const CopSelectionContainer = () => {
  const [selectedCopIndex, setSelectedCopIndex] = useState(0);
  const totalCops = 3; // Total number of cops
  const [selectedCops, setSelectedCops] = useState(Array(3).fill(null));

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

  const callBackend = async (selectedCops) => {

    console.log(selectedCops);
    try {
      const response = await fetch('https://server-d1hij6wme-vaibhav-raj-saxenas-projects.vercel.app/investigate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cops: selectedCops })
      });
  
      if (!response.ok) {
        throw new Error('Failed to call backend API');
      }
  
      const data = await response.json();
      console.log(data); 
  
    } catch (error) {
      console.error('Error calling backend API:', error.message);
    }
  }


  const checkAndCompleteSelection = () => {
    const allCopsSelected = selectedCops.every(cop => cop !== null && cop.selectedCity && cop.selectedVehicle);
    
    if (allCopsSelected && selectedCops.length === totalCops) {
      callBackend(selectedCops);
    }
  }

  const onCompleteSelection = async (copIndex, selectedCity, selectedVehicle) => {
    setSelectedCopIndex(prevIndex => prevIndex + 1);

    setSelectedCops(prevSelectedCops => {
      const updatedSelectedCops = [...prevSelectedCops];
      updatedSelectedCops[copIndex] = { selectedCity, selectedVehicle };
      return updatedSelectedCops;
    });
    console.log(selectedCops)
    checkAndCompleteSelection();
  }

  useEffect(() => {
    // Check if all cops have made selections
    const allCopsSelected = selectedCops.every(cop => cop !== null);
    if (allCopsSelected) {
        // Call the function to handle the completion of all cop selections
        checkAndCompleteSelection();
    }
  }, [selectedCops]);

  return (
    <div className="cop-selection-container" style={{ width: `${totalCops*100}%` }}>
      {/* Render each CopContainer and apply slide effect based on selectedCopIndex */}
      {[...Array(totalCops).keys()].map(index => (
        <div
          key={index}
          className={`cop-container-wrapper ${index === selectedCopIndex ? 'active' : 'inactive'}`}
          style={{ transform: `translateX(-${selectedCopIndex * 100}%)` }}
        >
          <CopContainer cities={cities} setCities={setCities} setVehicles={setVehicles} vehicles={vehicles} copName={index + 1} 
          onCompleteSelection={(selectedCity, selectedVehicle) => onCompleteSelection(index, selectedCity, selectedVehicle)
            } />
        </div>
      ))}
    </div>
  )
}

export default CopSelectionContainer;
