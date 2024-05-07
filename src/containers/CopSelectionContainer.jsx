import React, { useEffect, useState } from 'react';
import '../styles/CopSelectionContainer.css';
import CopContainer from './CopContainer';
import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';

const CopSelectionContainer = () => {
  const [selectedCopIndex, setSelectedCopIndex] = useState(0);
  const totalCops = 3; // Total number of cops
  const [selectedCops, setSelectedCops] = useState(Array(3).fill(null));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
    { name: "EV Car", range: 100, count: 1, isUsed: false, image: '/ev_car.png' },
    { name: "EV SUV", range: 120, count: 1, isUsed: false, image: '/ev_suv.png' }
  ]);

  const callBackend = async (selectedCops) => {

    try {
      const response = await fetch('https://server-cop.vercel.app/investigate', {
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
      await setResult(data);
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
    checkAndCompleteSelection();
  }

  useEffect(() => {
    // Check if all cops have made selections
    const allCopsSelected = selectedCops.every(cop => cop !== null);
    if (allCopsSelected) {
        checkAndCompleteSelection();
    }
    // eslint-disable-next-line
  }, [selectedCops]);


  const handleRestartGame = () => {

    setLoading(true);

    fetch('https://server-cop.vercel.app/new-game', {
      method: 'POST'
    })
    .then(data => {
      // Optionally handle the response if needed
      setTimeout(() => {
        window.location.reload();
        console.log('New game started');
        setLoading(false);
        }, 500); // Delay of 500 milliseconds (0.50 seconds)
    })
    .catch(error => {
      console.error('Error starting new game:', error);
      setLoading(false);
    });
  };



  return (
    <>
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
      <div className='result-container'>
      {result && (
          <Box
            mt={4}
            mb={10}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="xl"
            borderColor="gray.200"
            minW={{ base: '50%', md: '70%' }}
          >
            <Box mb={2} fontSize="xl" fontWeight="bold" color={'orange'}>Investigation Result</Box>
            <VStack spacing={2} alignItems="flex-start">
              {Object.keys(result).slice(0, 3).map((cop, index) => (
                <Box key={index} display="flex" alignItems="center">
                  {result[cop] ? (
                    <CheckCircleIcon color="green.500" boxSize={5} />
                  ) : (
                    <CloseIcon color="red.500" boxSize={5} />
                  )}
                  <Text ml={2} fontWeight="medium" color={result[cop] ? 'green.500' : 'red.500'}>{`Cop ${index + 1} ${result[cop] ? 'found' : 'could not find'} the criminal`}</Text>
                </Box>
              ))}
              <Text fontWeight="medium">Criminal city was {result[Object.keys(result)[3]]}</Text>
            </VStack>
            <Center>
              <Button
                mt={4}
                bgColor={'blue.300'}
                color={'white'}
                _hover={{ bgColor: 'blue.400' }}
                _active={{ bgColor: 'blue.500' }}
                isLoading={loading}
                onClick={handleRestartGame}
              >
                Restart
              </Button>
            </Center>
          </Box>
        )}
        </div>

      </>
    
  )
}

export default CopSelectionContainer;
