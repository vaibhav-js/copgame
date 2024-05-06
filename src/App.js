import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, VStack, Text, Heading } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import InstructionsModal from './InstructionsModal';
import MainContainer from './containers/MainContainer';

const CopsSelection = () => {
  // const [cop1City, setCop1City] = useState('');
  // const [cop2City, setCop2City] = useState('');
  // const [cop3City, setCop3City] = useState('');
  // const [selectedCities, setSelectedCities] = useState([null, null, null]);

  // const [cop1Vehicle, setCop1Vehicle] = useState('');
  // const [cop2Vehicle, setCop2Vehicle] = useState('');
  // const [cop3Vehicle, setCop3Vehicle] = useState('');
  // const [selectedVehicles, setSelectedVehicles] = useState([null, null, null]);

  // const [loading, setLoading] = useState(false);

  // const [result, setResult] = useState(null); // Added result state

  // const cities = [
  //   { name: "Yapkashnagar", distance: 60, isUsed: false, image: '/city1.png' },
  //   { name: "Lihaspur", distance: 50, isUsed: false, image: '/city2.png' },
  //   { name: "Narmis City", distance: 40, isUsed: false, image: '/city3.png' },
  //   { name: "Shekharvati", distance: 30, isUsed: false, image: '/city4.png' },
  //   { name: "Nuravgram", distance: 20, isUsed: false, image: '/city5.png' }
  // ];

  // const vehicles = [
  //   { name: "EV Bike 1", range: 60, count: 1, isUsed: false, image: '/ev_bike.png' },
  //   { name: "EV Bike 2", range: 60, count: 1, isUsed: false, image: '/ev_bike.png' },
  //   { name: "EV SUV", range: 120, count: 1, isUsed: false, image: '/ev_suv.png' },
  //   { name: "EV Car", range: 100, count: 1, isUsed: false, image: '/ev_car.png' }
  // ];

  // const [showInstructions, setShowInstructions] = useState(false);

  // const handleCloseInstructions = () => {
  //   setShowInstructions(!showInstructions);
  // };


  // const [gameLoaded, setGameLoaded] = useState(false);

  // // Add useEffect to set gameLoaded to true after a delay
  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     setGameLoaded(true);
  //   }, 500); // Adjust the delay time as needed
    
  //   // Clear the timeout to avoid memory leaks
  //   return () => clearTimeout(delay);
  // }, []);

  // const handleCopChange = (copIndex, city) => {
  //   switch (copIndex) {
  //     case 1:
  //       setCop1City(city);
  //       setSelectedCities((prev) => [...prev.slice(0, 0), city, ...prev.slice(1)]);

  //       break;
  //     case 2:
  //       setCop2City(city);
  //       setSelectedCities((prev) => [...prev.slice(0, 1), city, ...prev.slice(2)]);
  //       break;
  //     case 3:
  //       setCop3City(city);
  //       setSelectedCities((prev) => [...prev.slice(0, 2), city]);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleVehicleChange = (copIndex, vehicle) => {
  //   switch (copIndex) {
  //     case 1:
  //       setCop1Vehicle(vehicle);
  //       setSelectedVehicles((prev) => [...prev.slice(0, 0), vehicle, ...prev.slice(1)]);
  //       break;
  //     case 2:
  //       setCop2Vehicle(vehicle);
  //       setSelectedVehicles((prev) => [...prev.slice(0, 1), vehicle, ...prev.slice(2)]);
  //       break;
  //     case 3:
  //       setCop3Vehicle(vehicle);
  //       setSelectedVehicles((prev) => [...prev.slice(0, 2), vehicle]);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = () => {
  //   const cop1 = { city: cop1City, vehicle: cop1Vehicle };
  //   const cop2 = { city: cop2City, vehicle: cop2Vehicle };
  //   const cop3 = { city: cop3City, vehicle: cop3Vehicle };
  //   const cops = [cop1, cop2, cop3];

  //   setLoading(true);

  //   fetch('http://localhost:5000/investigate', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ cops })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     // Add a 1-second delay before setting the result and disabling loading
  //   setTimeout(() => {
  //     setResult(data);
  //     setLoading(false);
  //     console.log(data);
  //     }, 1000); // Delay of 1000 milliseconds (1 seconds)
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     setLoading(false);
  //   });
  // };


  // const isSelectionComplete = () => {
  //   // Check if cities and vehicles are selected for all cops
  //   return cop1City !== '' && cop1Vehicle !== '' &&
  //          cop2City !== '' && cop2Vehicle !== '' &&
  //          cop3City !== '' && cop3Vehicle !== '';
  // };


  // const handleRestartGame = () => {

  //   setLoading(true);

  //   fetch('http://localhost:5000/new-game', {
  //     method: 'POST'
  //   })
  //   .then(data => {
  //     // Optionally handle the response if needed
  //     setTimeout(() => {
  //       window.location.reload();
  //       console.log('New game started');
  //       setLoading(false);
  //       }, 500); // Delay of 500 milliseconds (0.50 seconds)
  //   })
  //   .catch(error => {
  //     console.error('Error starting new game:', error);
  //     setLoading(false);
  //   });
  // };

  return (

    <MainContainer />

    // <Box m={20} p={10} borderRadius="md" boxShadow="lg" textAlign="center"  bg="gray.300" style={{
    //   transition: gameLoaded ? 'opacity 2s' : 'none', // Apply transition only after the game has loaded
    //   opacity: gameLoaded ? 1 : 0, // Start with opacity 0 and transition to opacity 1
    // }}>
    //   {/* Help button to open instructions modal */}
    //   <IconButton
    //     icon={<InfoOutlineIcon />}
    //     aria-label="Help"
    //     onClick={() => setShowInstructions(true)}
    //     position="absolute"
    //     top="10px"
    //     right="10px"
    //   />
    //   {/* Instructions modal */}
    //   <InstructionsModal isOpen={showInstructions} onClose={handleCloseInstructions} />
    //   <Box mb={4} fontSize="xl" fontWeight="bold">Cops Selection</Box>
    //   <VStack spacing={4} alignItems="center">
    //     {[1, 2, 3].map((copIndex) => (
    //     <React.Fragment key={copIndex}>
    //       <Heading>Cop {copIndex}</Heading>
    //       {selectedCities[copIndex - 1] ? ( // Check if a city is selected for this cop
    //         <Box key={copIndex} mr={4} mb={4} style={{
    //           cursor: 'pointer',
    //           transition: 'opacity 1s', // Add transition effect for opacity change
    //         }}>
    //           <Text>{selectedCities[copIndex - 1]}</Text>
    //           <img
    //             src={cities.find(city => city.name === selectedCities[copIndex - 1]).image} // Get the image corresponding to the selected city
    //             alt={selectedCities[copIndex - 1]}
    //             onClick={() => handleCopChange(copIndex, selectedCities[copIndex - 1])}
    //             style={{
    //               width: '100px',
    //               height: '100px',
    //             }}
    //           />
    //         </Box>
    //       ) : (
    //         <>
    //           <Text fontSize={'xl'} fontWeight={'bold'}>Select a city</Text>
    //           <Flex flexWrap="wrap" style={{
    //             transition: gameLoaded ? 'opacity 1s, transform 1s' : 'none', // Apply transition only after the game has loaded
    //             opacity: gameLoaded ? 1 : 0, // Start with opacity 0 and transition to opacity 1
    //             transform: gameLoaded ? 'translateX(0)' : 'translateX(-100%)', // Start offscreen to the left and transition to center
    //             }}>
    //             {cities.map((city, index) => (
    //               <Box key={index} mr={4} mb={4} style={{
    //                 cursor: 'pointer',
    //                 transition: 'opacity 0.5s', // Add transition effect for opacity change
    //                 opacity: selectedCities.includes(city.name) ? 0.5 : 1, // Reduce opacity if city is already selected
    //                 pointerEvents: selectedCities.includes(city.name) ? 'none' : 'auto', // Disable click events if city is already selected
    //               }}>
    //                 <Text>{city.name}</Text>
    //                 <img
    //                   src={city.image}
    //                   alt={city.name}
    //                   onClick={() => handleCopChange(copIndex, city.name)}
    //                   style={{
    //                     width: '100px',
    //                     height: '100px',
    //                     // opacity: selectedCities.includes(city.name) ? 0.5 : 1, // Reduce opacity if city is already selected
    //                     // pointerEvents: selectedCities.includes(city.name) ? 'none' : 'auto', // Disable click events if city is already selected
    //                     }}
    //                   />
    //                 </Box>
    //             ))}
    //           </Flex>
    //         </>
    //       )}

    //       {selectedVehicles[copIndex - 1] ? ( // Check if a vehicle is selected for this cop
    //         <Box key={copIndex+1} mr={4} mb={4} style={{
    //           cursor: 'pointer',
    //           transition: 'opacity 1s', // Add transition effect for opacity change
    //         }}>
    //           <Text>{selectedVehicles[copIndex - 1]}</Text>
    //           <img
    //             src={vehicles.find(vehicle => vehicle.name === selectedVehicles[copIndex - 1]).image} // Get the image corresponding to the selected vehicle
    //             alt={selectedVehicles[copIndex - 1]}
    //             onClick={() => handleVehicleChange(copIndex, selectedVehicles[copIndex - 1])}
    //             style={{
    //               width: '100px',
    //               height: '100px',
    //             }}
    //           />
    //         </Box>
    //       ) : (
    //         <>
    //           <Text fontSize={'xl'} fontWeight={'bold'}>Select a vehicle</Text>
    //           <Flex flexWrap="wrap" style={{
    //             transition: gameLoaded ? 'opacity 1s, transform 1s' : 'none', // Apply transition only after the game has loaded
    //             opacity: gameLoaded ? 1 : 0, // Start with opacity 0 and transition to opacity 1
    //             transform: gameLoaded ? 'translateX(0)' : 'translateX(-500%)', // Start offscreen to the left and transition to center
    //             }}>
    //             {vehicles.map((vehicle, index) => (
    //               <Box key={index} mr={4} mb={4} style={{
    //                 cursor: 'pointer',
    //                 transition: 'opacity 0.5s', // Add transition effect for opacity change
    //                 opacity: selectedVehicles.includes(vehicle.name) ? 0.5 : 1, // Reduce opacity if city is already selected
    //                 pointerEvents: selectedVehicles.includes(vehicle.name) ? 'none' : 'auto', // Disable click events if city is already selected
    //                 }}>
    //                 <Text>{vehicle.name}</Text>
    //                 <img
    //                   src={vehicle.image}
    //                   alt={vehicle.name}
    //                   onClick={() => handleVehicleChange(copIndex, vehicle.name)}
    //                   style={{
    //                     width: '100px',
    //                     height: '100px',
    //                     // opacity: selectedVehicles.includes(vehicle.name) ? 0.5 : 1, // Reduce opacity if vehicle is already selected
    //                     // pointerEvents: selectedVehicles.includes(vehicle.name) ? 'none' : 'auto', // Disable click events if vehicle is already selected
    //                   }}
    //                 />
    //               </Box>
    //             ))}
    //           </Flex>
    //         </>
    //       )}
    //       </React.Fragment>
    //     ))}
    //   </VStack>
    //   <Center>
    //     <Button m={4} colorScheme="blue" onClick={handleSubmit} isDisabled={!isSelectionComplete()} isLoading={loading}>
    //       Submit
    //     </Button>
    //     <Button m={4} colorScheme="green" onClick={handleRestartGame} isLoading={loading} isDisabled={loading}>
    //       Restart Game
    //     </Button>
    //   </Center>
    //   <Center>   
    //     {result && (
    //       <Box mt={4} mb={10} p={4} borderWidth="1px" borderRadius="md" boxShadow="lg" borderColor="gray.200" bg="gray.200"> {/* Add border, border radius, and background color */}
    //         <Box mb={2} fontSize="xl" fontWeight="bold" color={'orange'}>Investigation Result</Box>
    //         <VStack spacing={2} alignItems="flex-start">
    //           {Object.keys(result).slice(0,3).map((cop, index) => (
    //             <Box key={index}>
    //               <Text>{`Cop ${index + 1} ${result[cop] ? 'found' : 'could not find'} the criminal`}</Text>
    //             </Box>
    //           ))}
    //           <Text>Criminal city was {result[Object.keys(result)[3]]}</Text>
    //         </VStack>
    //       </Box>
    //     )}
    //   </Center>
    // </Box>
  );
};

export default CopsSelection;
