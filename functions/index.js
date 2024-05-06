// index.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Weighted graph representing cities and distances
const citiesGraph = {
  "Yapkashnagar": { distance: 60},
  "Lihaspur": { distance: 50},
  "Narmis City": { distance: 40},
  "Shekharvati": { distance: 30},
  "Nuravgram": { distance: 20}
}

const vehicles = [
  { type: "EV Bike 1", range: 60},
  { type: "EV Bike 2", range: 60},
  { type: "EV Car", range: 100},
  { type: "EV SUV", range: 120}
];

// Get list of cities
const cities = Object.keys(citiesGraph);

  // Function to generate criminal city
  function generateCriminalCity() {
    return cities[Math.floor(Math.random() * cities.length)];
  }


// Simulate investigation for each cop
function simulateInvestigation(copCity, copVehicle, criminalCity) {
  const criminalDistance = citiesGraph[criminalCity].distance;

  // Find the range of the selected vehicle
  const vehicleRange = vehicles.find(vehicle => vehicle.type === copVehicle)?.range || 0;

  // Check if the cop city is the same as the criminal city
  if (copCity === criminalCity) {
      // Check if the vehicle range is greater than or equal to round trip to criminal city
      if (vehicleRange >= 2 * criminalDistance) {
          return true; // Cop can catch the criminal
      }
  }

  return false; // Cop cannot catch the criminal
}


// Endpoint to investigate and retrieve results
app.post('/investigate', (req, res) => {

  let criminalCity = generateCriminalCity(); // Generate criminal city when the server starts
  console.log(criminalCity)

  const { cops } = req.body;
  
  // Ensure that each cop object is defined and has the expected properties
  const [cop1, cop2, cop3] = cops;
  
  // Your existing code for investigation simulation
  const result = {
    cop1: simulateInvestigation(cop1.city, cop1.vehicle, criminalCity),
    cop2: simulateInvestigation(cop2.city, cop2.vehicle, criminalCity),
    cop3: simulateInvestigation(cop3.city, cop3.vehicle, criminalCity),
    criminalCity: criminalCity
  };
  


  res.send(result);
});


// Endpoint to signal the start of a new game session
app.post('/new-game', (req, res) => {
  criminalCity = generateCriminalCity(); // Generate new criminal city for the new game session
  console.log(criminalCity)
  res.set('Content-Type', 'text/plain').send('OK');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
