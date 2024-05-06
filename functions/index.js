const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

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

const cities = Object.keys(citiesGraph);

function generateCriminalCity() {
  return cities[Math.floor(Math.random() * cities.length)];
}


function simulateInvestigation(copCity, copVehicle, criminalCity) {
  const criminalDistance = citiesGraph[criminalCity].distance;

  const vehicleRange = vehicles.find(vehicle => vehicle.type === copVehicle)?.range || 0;


  if (copCity === criminalCity) {

      if (vehicleRange >= 2 * criminalDistance) {
          return true;
      }
  }

  return false; 
}

app.post('/investigate', (req, res) => {

  let criminalCity = generateCriminalCity();
  console.log(criminalCity)

  const { cops } = req.body;
  
  const [cop1, cop2, cop3] = cops;
  
  const result = {
    cop1: simulateInvestigation(cop1.city, cop1.vehicle, criminalCity),
    cop2: simulateInvestigation(cop2.city, cop2.vehicle, criminalCity),
    cop3: simulateInvestigation(cop3.city, cop3.vehicle, criminalCity),
    criminalCity: criminalCity
  };
  


  res.send(result);
});


app.post('/new-game', (req, res) => {
  criminalCity = generateCriminalCity(); 
  console.log(criminalCity)
  res.set('Content-Type', 'text/plain').send('OK');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
